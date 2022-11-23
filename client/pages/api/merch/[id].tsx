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
    } else {

        // Description comes as html. This converts it.
        const description = htmlToText(printifyItem.description, { wordwrap: false });

        const item = { 
            "id": printifyItem.id,
            "name": printifyItem.title,
            "description": description,
            "price": "",
            "images": [],
            "colors": [],
            // "colorsHexCode": json.data[0].options[0].values[0].colors[0],//color is an array only need first one
            "sizes": ["M"]
        }

        //check for price by getting first enabled item price
        for (let i = 0; i < printifyItem.variants.length; i++) {
            if (printifyItem.variants[i].is_enabled) {
                item.price = printifyItem.variants[i].price/100 + '' //turn from cents to dollars
                i += printifyItem.variants.length
            }
        }

        //get default image
        // for (let i = 0; i < item.images.length; i++) {
        //     if (item.images[i].is_default) {
        //         image = item.images[i].src
        //         i += item.variants.length
        //     }
        // }
            
                    
        

        res.status(200).json(item);
    }

}


