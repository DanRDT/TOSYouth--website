import mongoose from "mongoose";
import Item from "../../../model/merch-item"


export default async function handler(req, res) {
    const { id } = req.query

    const uri = `mongodb+srv://${process.env.DB_USERNAME_WRITE_PRIV}:${process.env.DB_PASSWORD_WRITE_PRIV}@tosydatabase.6xjkcub.mongodb.net/Website?retryWrites=true&w=majority`;
    
    mongoose.set('strictQuery', false);
    mongoose.connect(uri);
    
    
    if (req.method === "GET") {
        const result = await Item.findOne({id: id})
        return res.status(200).json(result)
    } 
    
    else if (req.method === "PATCH") {

        // TODO: insert auth

        const updatedItem = req.body
        
        // TODO: insert check conditions

        await Item.replaceOne({id: id}, updatedItem)
        const result = await Item.findOne({id: id})
        // return res.status(200).json(result)
        return res.status(200).json({"success": true, "message": "Item updated"})
    } 
    
    else if (req.method === "POST") {

        // TODO: insert auth

        const newItem = req.body
        
        const result = await Item.findOne({id: newItem.id})
        if (result != null) {
            return res.status(250).json({"success": false, "message": "Item already exists in database"})
        }

        // TODO: insert check conditions

        await Item.create(newItem)
        return res.status(201).json({"success": true, "message": "Item added"})
    }
    
}





