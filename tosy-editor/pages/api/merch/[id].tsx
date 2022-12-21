import mongoose from "mongoose";
import Item from "../../../model/merch-item"


export default async function handler(req, res) {
    const { id } = req.query

    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/Website?retryWrites=true&w=majority`;
    
    mongoose.set('strictQuery', false);
    mongoose.connect(uri)
    
    
    if (req.method === "GET") {
        const result = await Item.find({id: id})
        return res.status(200).json(result)
    } 
    else if (req.method === "POST") {


    }
    
}





