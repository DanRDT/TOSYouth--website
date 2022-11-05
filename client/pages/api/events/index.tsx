
export default function handler(req, res) {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://<username>:<password>@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("Website").collection("Merch");
    // perform actions on the collection object
    client.close();
  });




  res.status(200).json({ name:  })
}
