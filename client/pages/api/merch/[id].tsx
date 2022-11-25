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

    // if (!printifyItem.is_locked) { // false means its not been published
    //     res.status(403).json({"Error": "Item Not Allowed"});        
    // } else {

    //     // Description comes as html. This converts it.
    //     const description = htmlToText(printifyItem.description, { wordwrap: false });

    //     const item = { 
    //         "id": printifyItem.id,
    //         "name": printifyItem.title,
    //         "description": description,
    //         "price": "",
    //         "images": [],
    //         "colors": [],
    //         // "colorsHexCode": json.data[0].options[0].values[0].colors[0],//color is an array only need first one
    //         "sizes": []
    //     }

    //     //check for price by getting first enabled item price
    //     for (let i = 0; i < printifyItem.variants.length; i++) {
    //         if (printifyItem.variants[i].is_enabled) {
    //             item.price = printifyItem.variants[i].price/100 + '' //turn from cents to dollars
    //             i += printifyItem.variants.length
    //         }
    //     }

    //     //get default image
    //     // for (let i = 0; i < item.images.length; i++) {
    //     //     if (item.images[i].is_default) {
    //     //         image = item.images[i].src
    //     //         i += item.variants.length
    //     //     }
    //     // }
            
                    
        

    //     res.status(200).json(item);
    // }
    const item = {
        "id": "637d78e2e21e9a36610eb989",
        "name": "Crew-neck Sweatshirt",
        "description": "Take the cold seasons in style with this premium crew neck sweatshirt. Available in multiple colors, this sweatshirt is sure to keep you warm and stylish all day long. It’s not only beautiful but also comfy and soft to the touch.",
        "price": "44.95 - 45.99",
        "color_variants": 
        [
            {
                "color": "Black",
                "hexCode": "#000",
                "images": 
                [
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62627/77952/crewneck-sweatshirt.jpg",
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62627/77973/crewneck-sweatshirt.jpg"
                ],
                "sizes": 
                [
                    {
                        "size": "XS",
                        "variant_id": "14367",
                        "variant_price": "44.85"
                    },
                    {
                        "size": "S",
                        "variant_id": "14367",
                        "variant_price": "44.85"
                    },
                    {
                        "size": "M",
                        "variant_id": "14567",
                        "variant_price": "44.95"
                    },
                    {
                        "size": "L",
                        "variant_id": "14767",
                        "variant_price": "49.95"
                    }
                ]
            },
            {
                "color": "White",
                "hexCode": "#fff",
                "images": 
                [
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77958/crewneck-sweatshirt.jpg",
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77979/crewneck-sweatshirt.jpg"
                ],
                "sizes": 
                [
                    {
                        "size": "S",
                        "variant_id": "15367",
                        "variant_price": "44.75"
                    },
                    {
                        "size": "M",
                        "variant_id": "15567",
                        "variant_price": "44.90"
                    },
                    {
                        "size": "L",
                        "variant_id": "15767",
                        "variant_price": "49.99"
                    },
                    {
                        "size": "XL",
                        "variant_id": "15867",
                        "variant_price": "54.95"
                    }
                ]
            },
            {
                "color": "Grey",
                "hexCode": "#666",
                "images": 
                [
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62629/77954/crewneck-sweatshirt.jpg",
                    "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62629/77975/crewneck-sweatshirt.jpg"
                ],
                "sizes": 
                [
                    {
                        "size": "S",
                        "variant_id": "15367",
                        "variant_price": "44.75"
                    },
                    {
                        "size": "M",
                        "variant_id": "15567",
                        "variant_price": "44.90"
                    },
                    {
                        "size": "L",
                        "variant_id": "15767",
                        "variant_price": "49.99"
                    },
                    {
                        "size": "XL",
                        "variant_id": "15867",
                        "variant_price": "54.95"
                    }
                ]
            }
        ]
    }
    res.status(200).json(item);
}


