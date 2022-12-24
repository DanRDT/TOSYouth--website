const { htmlToText } = require('html-to-text');

export default async function handler(req, res) {
    const { id } = req.query
  
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
                let option: object = {
                    [printifyOptionType.type]: value.title,
                    "type": printifyOptionType.type
                }
                
                //add hex code for colors
                if (printifyOptionType.type == "color") {
                    option = {
                        ...option,
                        "hexCode": value.colors[0],
                    }
                }

                options = {...options, [value.id]: option}
            })
        })


        let color_variants: any = []
        let firstVariantCreated = false;

        // get all color and size variants
        printifyItem.variants.map((variant) => {
            if (!variant.is_enabled) return
            // if (!variant.is_available) return


            // check if options id's are size or color first
            // change if more than two options ever occurs (Not yet found a case where that will happen)
            let variantOptionsColorIndex = 0 
            let variantOptionsSizeIndex = 1
            if (options[variant.options[1]].type == "color") {
                variantOptionsColorIndex = 1 
                variantOptionsSizeIndex = 0
            }

            const variantColor = options[variant.options[variantOptionsColorIndex]].color
            const hexCode = options[variant.options[variantOptionsColorIndex]].hexCode
            const variantSize = options[variant.options[variantOptionsSizeIndex]].size


            // create first default item before mapping thru the color_variants
            if (!firstVariantCreated) {
                firstVariantCreated = true

                color_variants.push({
                    "color": variantColor,
                    "hexCode": hexCode,
                    "images": getColorVariantImages(printifyItem.images, variant.id),
                    "sizes": 
                    [
                        {
                            "size": variantSize,
                            "variant_id": variant.id,
                            "variant_price": variant.price/100,
                            "size_id": variant.options[variantOptionsSizeIndex]
                        }
                    ]
                })
                return
            }

            
            let colorExists = false;
            //update existing color variants
            color_variants.map((existingVariant, i) => {
                if (existingVariant.color == variantColor) {
                    colorExists = true
                    color_variants[i].sizes.push({
                        "size": variantSize,
                        "variant_id": variant.id,
                        "variant_price": variant.price/100,
                        "size_id": variant.options[variantOptionsSizeIndex]
                    })

                    // required because printify variant
                    let images = [...color_variants[i].images]
                    getColorVariantImages(printifyItem.images, variant.id).map((image)=> {
                        let imageExists = false
                        // check if image already exists on color variant
                        color_variants[i].images.map((existingImage)=> {
                            if (image.src == existingImage.src) {
                                imageExists = true
                            }
                        })
                        if (!imageExists) {
                            images.push(image)
                        }
                    })
                    color_variants[i] = {...color_variants[i], 
                        "images": images}
                    
                }
            })

            if (colorExists == false) {
                
                //create new color variant
                color_variants.push({
                    "color": variantColor,
                    "hexCode": hexCode,
                    "images": getColorVariantImages(printifyItem.images, variant.id),
                    "sizes": 
                    [
                        {
                            "size": variantSize,
                            "variant_id": variant.id,
                            "variant_price": variant.price/100,
                            "size_id": variant.options[variantOptionsSizeIndex]
                        }
                    ]
                })
            }

            
            
            // check for Min And Max Price
            if (variant.price < minPrice) minPrice = variant.price
            if (variant.price > maxPrice) maxPrice = variant.price
        })
        
        // sort size variants
        color_variants.map((color)=> {
            insertionSortSizes(color.sizes)
        })



        // Description comes as html. This converts it.
        const description = htmlToText(printifyItem.description, { wordwrap: false });
        
        //set default price range
        let price = ""
        // convert from cents
        minPrice /= 100
        maxPrice /= 100
        if (minPrice == maxPrice) {
            price = maxPrice + ''
        } else {
            price = `${minPrice} - ${maxPrice}`
        }
    
        const item = {
            "id": printifyItem.id,
            "name": printifyItem.title,
            "description": description,
            "price": price,
            "color_variants": color_variants,
            "item_on_sale": false,
            "main_image": color_variants[0].images[0].src
        }
        
        res.status(200).json(item);
    } else {
        res.status(404).json({"Error": "Something when data fetch from printify"})
    }
    // sample item
    // const item = {
    //     "id": "637d78e2e21e9a36610eb989",
    //     "name": "Crewneck Sweatshirt",
    //     "description": "Take the cold seasons in style with this premium crew neck sweatshirt. Available in multiple colors, this sweatshirt is sure to keep you warm and stylish all day long. It’s not only beautiful but also comfy and soft to the touch.",
    //     "price": "37.95",
    //     "color_variants": [
    //         {
    //             "color": "White",
    //             "hexCode": "#ffffff",
    //             "images": [ {
    //                     "src": "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77958/crewneck-sweatshirt.jpg",
    //                     "active": true
    //                 },
    //                 {
    //                     "src": "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/68016/77959/crewneck-sweatshirt.jpg",
    //                     "active": true
    //                 }
    //             ],
    //             "sizes": [
    //                 {
    //                     "size": "S",
    //                     "variant_id": 68014,
    //                     "variant_price": 37.95,
    //                     "size_id": 14
    //                 },
    //                 {
    //                     "size": "M",
    //                     "variant_id": 68015,
    //                     "variant_price": 37.95,
    //                     "size_id": 15
    //                 },
    //                 {
    //                     "size": "L",
    //                     "variant_id": 68016,
    //                     "variant_price": 37.95,
    //                     "size_id": 16
    //                 }
    //             ]
    //         },
    //         {
    //             "color": "Black",
    //             "hexCode": "#000000",
    //             "images": [
    //                 {
    //                     "src": "https://images-api.printify.com/mockup/637d78e2e21e9a36610eb989/62627/77952/crewneck-sweatshirt.jpg",
    //                     "active": true
    //                 }
    //             ],
    //             "sizes": [
    //                 {
    //                     "size": "S",
    //                     "variant_id": 62615,
    //                     "variant_price": 37.95,
    //                     "size_id": 14
    //                 },
    //                 {
    //                     "size": "M",
    //                     "variant_id": 62621,
    //                     "variant_price": 37.95,
    //                     "size_id": 15
    //                 },
    //                 {
    //                     "size": "L",
    //                     "variant_id": 62627,
    //                     "variant_price": 37.95,
    //                     "size_id": 16
    //                 }
    //             ]
    //         },
    //     ]
    // }

}



function insertionSortSizes(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        let prevIndex = i - 1 
        while (prevIndex >= 0 && array[prevIndex].size_id > current.size_id) {
            array[prevIndex + 1] = array[prevIndex]
            prevIndex--
        }
        array[prevIndex + 1] = current
    }
    return array
}


function getColorVariantImages(images, variantId) {
    let colorVariantImages = [];
    images.map((image) => {

        // check if one variant id equals the new color variant id
        image.variant_ids.some((variant_id) => {
            if (variant_id == variantId) {
                colorVariantImages.push({"src": image.src, "active": false})
                return true
            }
        })
    })
    return colorVariantImages
}