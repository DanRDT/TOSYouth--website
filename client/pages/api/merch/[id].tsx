const { htmlToText } = require('html-to-text');

export default async function handler(req, res) {
    const { id } = req.query
  
//   const {MongoClient} = require('mongodb');
//   const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority`;
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   let result;

//   try {
//       await client.connect();
//       const db = client.db("Website");

//       const collection = db.collection("Merch");

//       const searchCursor = await collection.findOne({"id": id});
      
//       result = searchCursor;

//       res.status(200).json(result)
      
//   } catch (error) {
//       console.error(error)
//       res.status(500)
//   } finally {
//       client.close();
//   }
    const printifyRes = await fetch(`https://api.printify.com/v1/shops/5414762/products/${id}.json`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${process.env.PRINTIFY_TOKEN_READ_ONLY}`}
    })
    const printifyItem = await printifyRes.json()

    
    if (!printifyItem.is_locked) { // false means its not been published
        res.status(403).json({"Error": "Item Not Allowed"});        
    } else if (printifyItem.is_locked) {

        // used to calculate default price range
        let minPrice = 10000000000000000;
        let maxPrice = 0;
        
        
        // reorganize options 
        let options: object = {
            // "2420": {
            //     "color": "Black",
            //     "hexCode": "000"
            // },
            // "2421": {
            //     "color": "White",
            //     "hexCode": "fff"
            // },
            // "14": {
            //     "size": "S",
            // },
            // "15": {
            //     "size": "M",
            // }
        }
        printifyItem.options.map((printifyOptionType) => {
            printifyOptionType.values.map((value)=>{
                let option: object = {}

                if (printifyOptionType.type == "color") {
                    //add hex code for colors
                    option = {
                        [printifyOptionType.type]: value.title,
                        "hexCode": value.colors[0]
                    }
                } else {
                    option = {
                        [printifyOptionType.type]: value.title
                    }
                }
                options = {...options, [value.id]: option}
            })
        })


        const variants = printifyItem.variants

        
        let color_variants: any = [
            // {
            //     "color": options[variants[0].options[0]].color,
            //     "hexCode": options[variants[0].options[0]].hexCode,
            //     "images": 
            //     [
                    
            //     ],
            //     "sizes": 
            //     [
            //         {
            //             "size": options[variants[0].options[1]].size,
            //             "variant_id": variants[0].id,
            //             "variant_price": variants[0].price
            //         }
            //     ]
            // }
        ]

        let firstVariantCreated = false;
        // get all color and size variants
        printifyItem.variants.map((variant) => {
            if (!variant.is_enabled) return
            // if (!variant.is_available) return
            
            if (!firstVariantCreated) {
                firstVariantCreated = true
                color_variants.push({
                    "color": options[variant.options[0]].color,
                    "hexCode": options[variant.options[0]].hexCode,
                    "images": 
                    [
                        
                    ],
                    "sizes": 
                    [
                        {
                            "size": options[variant.options[1]].size,
                            "variant_id": variant.id,
                            "variant_price": variant.price
                        }
                    ]
                })
                return
            }

            const variantColor = options[variant.options[0]].color
            const variantSize = options[variant.options[1]].size

            let colorExists = false;
            // let sizeExists = false;
            
            //update existing color variants
            color_variants.map((existingVariant, i) => {
                if (existingVariant.color == variantColor) {
                    colorExists = true

                    // check for existing size for color
                    // existingVariant.sizes.map((size) => {
                    //     if (size == variantSize) {
                    //         sizeExists = true
                    //     }
                    // })    

                    //create new size variant for color
                    // if (sizeExists == false) {
                        color_variants[i].sizes.push({
                            "size": variantSize,
                            "variant_id": variant.id,
                            "variant_price": variant.price
                        })
                    // }

                }
            })
            //create new color variant
            if (colorExists == false) {
                color_variants.push({
                    "color": variantColor,
                    "hexCode": options[variant.options[0]].hexCode,
                    "images": 
                    [
                        
                    ],
                    "sizes": 
                    [
                        {
                            "size": variantSize,
                            "variant_id": variant.id,
                            "variant_price": variant.price
                        }
                    ]
                })
            }







            // check for Min And Max Price
            if (variant.price < minPrice) minPrice = variant.price
            if (variant.price > maxPrice) maxPrice = variant.price
        })





        // Description comes as html. This converts it.
        const description = htmlToText(printifyItem.description, { wordwrap: false });
        //set default price range
        const price = `${minPrice} - ${maxPrice}`

        const item = {
            "id": printifyItem.id,
            "name": printifyItem.title,
            "description": description,
            "price": price,
            "color_variants": color_variants
            // [
            //     {
            //         "color": "",
            //         "hexCode": "",
            //         "images": 
            //         [
            //             ""
            //         ],
            //         "sizes": 
            //         [
            //             {
            //                 "size": "",
            //                 "variant_id": "",
            //                 "variant_price": ""
            //             }
            //         ]
            //     }
            // ]
        }

        res.status(200).json(item);
    } else {
        res.status(404).json({"Error": "Something when data fetch from printify"})
    }
    // const item = {
    //     "id": "637d78e2e21e9a36610eb989",
    //     "name": "Crew-neck Sweatshirt",
    //     "description": "Take the cold seasons in style with this premium crew neck sweatshirt. Available in multiple colors, this sweatshirt is sure to keep you warm and stylish all day long. It’s not only beautiful but also comfy and soft to the touch.",
    //     "price": "44.95 - 45.99",
    //     "color_variants": 
    //     [
    //         {
    //             "color": "Black",
    //             "hexCode": "#000",
    //             "images": 
    //             [
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62627/77952/crewneck-sweatshirt.jpg",
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62627/77973/crewneck-sweatshirt.jpg"
    //             ],
    //             "sizes": 
    //             [
    //                 {
    //                     "size": "XS",
    //                     "variant_id": "14367",
    //                     "variant_price": "44.85"
    //                 },
    //                 {
    //                     "size": "S",
    //                     "variant_id": "14367",
    //                     "variant_price": "44.85"
    //                 },
    //                 {
    //                     "size": "M",
    //                     "variant_id": "14567",
    //                     "variant_price": "44.95"
    //                 },
    //                 {
    //                     "size": "L",
    //                     "variant_id": "14767",
    //                     "variant_price": "49.95"
    //                 }
    //             ]
    //         },
    //         {
    //             "color": "White",
    //             "hexCode": "#fff",
    //             "images": 
    //             [
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77958/crewneck-sweatshirt.jpg",
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77979/crewneck-sweatshirt.jpg"
    //             ],
    //             "sizes": 
    //             [
    //                 {
    //                     "size": "S",
    //                     "variant_id": "15367",
    //                     "variant_price": "44.75"
    //                 },
    //                 {
    //                     "size": "M",
    //                     "variant_id": "15567",
    //                     "variant_price": "44.90"
    //                 },
    //                 {
    //                     "size": "L",
    //                     "variant_id": "15767",
    //                     "variant_price": "49.99"
    //                 },
    //                 {
    //                     "size": "XL",
    //                     "variant_id": "15867",
    //                     "variant_price": "54.95"
    //                 }
    //             ]
    //         },
    //         {
    //             "color": "Grey",
    //             "hexCode": "#666",
    //             "images": 
    //             [
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62629/77954/crewneck-sweatshirt.jpg",
    //                 "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62629/77975/crewneck-sweatshirt.jpg"
    //             ],
    //             "sizes": 
    //             [
    //                 {
    //                     "size": "S",
    //                     "variant_id": "15367",
    //                     "variant_price": "44.75"
    //                 },
    //                 {
    //                     "size": "M",
    //                     "variant_id": "15567",
    //                     "variant_price": "44.90"
    //                 },
    //                 {
    //                     "size": "L",
    //                     "variant_id": "15767",
    //                     "variant_price": "49.99"
    //                 },
    //                 {
    //                     "size": "XL",
    //                     "variant_id": "15867",
    //                     "variant_price": "54.95"
    //                 }
    //             ]
    //         }
    //     ]
    // }
    // res.status(200).json(item);
}


