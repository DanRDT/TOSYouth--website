const {MongoClient} = require('mongodb');

export default async function handler(req, res) {  
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let result;
    try {
        await client.connect();
        const db = client.db("Website");

        const collection = db.collection("WebpageText");

        const latestItemsIDs = await collection.findOne({ "id": "latest-items"})

        console.log(latestItemsIDs);
        
        let result = [];

        await latestItemsIDs.latest_items.slice(-4).map((id) => {
            const latestItemRes = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${id}`)
                .then((res)=>{
                    result.push(res.json())
                })
                
        })
        
        // latestItemsIDs.latest_items.slice(-4).map((id) => {
        //     const merch = db.collection("Merch")
        //     const item = merch.findOne({"id": id})
        //     result.push(item)
        //     console.log(item)
        // })

        console.log(result);
        
        
        
    } catch (error) {
        console.error(error)
        res.status(500)
    } finally {
        client.close();
    }

    // const printifyRes = await fetch("https://api.printify.com/v1/shops/5414762/products.json", {
    //     method: 'GET',
    //     headers: {"Authorization": `Bearer ${process.env.PRINTIFY_TOKEN_READ_ONLY}`}
    // })
    // const printifyData = await printifyRes.json()
    

    // const items = []

    // printifyData.data.map((item) => {
    //     if (!item.is_locked) { //true means its been published
    //         return
    //     }
    //     let price;
    //     let image;

    //     //check for price by getting first enabled item price
    //     for (let i = 0; i < item.variants.length; i++) {
    //         if (item.variants[i].is_enabled) {
    //             price = item.variants[i].price/100 + '' //turn from cents to dollars
    //             i += item.variants.length
    //         }
    //     }

    //     //get default image
    //     for (let i = 0; i < item.images.length; i++) {
    //         if (item.images[i].is_default) {
    //             image = item.images[i].src
    //             i += item.variants.length
    //         }
    //     }
        
    //     items.push({
    //       "id": item.id,
    //       "name": item.title,
    //       "price": price,
    //       "image": image
    //     })
      
    // })

    // res.status(200).json(items);
}
