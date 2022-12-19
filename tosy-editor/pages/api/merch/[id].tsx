import mongoose from "mongoose";
import Item from "../../../model/merch-item"


export default async function handler(req, res) {
    const { id } = req.query

    
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tosydatabase.6xjkcub.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(uri)

    
}
