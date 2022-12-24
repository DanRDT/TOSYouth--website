const {MongoClient} = require('mongodb');

export default async function handler(req, res) {  
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let result;
    try {
      await client.connect();
      const db = client.db("Website");

      const collection = db.collection("Merch");

      const searchCursor = await collection.find().project({id: 1, name: 1, price: 1, main_image: 1});
      
      result = await searchCursor.toArray();
      res.status(200).json(result)
      
    } catch (error) {
      console.error(error)
      res.status(500)
    } finally {
      client.close();
    }
}
