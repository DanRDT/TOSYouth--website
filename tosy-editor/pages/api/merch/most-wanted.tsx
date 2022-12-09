
export default async function handler(req, res) {
  const {MongoClient} = require('mongodb');
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  let result;

  try {
    await client.connect();
    const db = client.db("Website");

    const collection = db.collection("Merch");

    const searchCursor = await collection.findOne({"mostWanted.currentlyActive": "true"});
    
    result = searchCursor;

    res.status(200).json(result)
    
  } catch (error) {
    console.error(error)
    res.status(500)
  } finally {
    client.close();
  }

}


