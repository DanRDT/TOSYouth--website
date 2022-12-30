import mongoose from "mongoose";
import Order from "../../../model/order"


export default async function handler(req, res) {
    const { id } = req.query

    const uri = `mongodb+srv://${process.env.DB_USERNAME_WRITE_PRIV}:${process.env.DB_PASSWORD_WRITE_PRIV}@tosydatabase.6xjkcub.mongodb.net/Website?retryWrites=true&w=majority`;
    
    mongoose.set('strictQuery', false);
    mongoose.connect(uri);
    
    
    if (req.method === "GET") {
        const result = await Order.findOne({"id": id})
        return res.status(200).json(result)
    } 
    
    // else if (req.method === "PATCH") {

    //     // TODO: insert auth

    //     const updatedOrder = req.body
        
    //     // TODO: insert check conditions

    //     await Order.replaceOne({"id": id}, updatedOrder)
    //     // const result = await Order.findOne({"id": id})
    //     // return res.status(200).json(result)
    //     return res.status(200).json({"success": true, "message": "Order updated"})
    // } 
    
    // else if (req.method === "POST") {

    //     // TODO: insert auth

    //     const newOrder = req.body
        
    //     const result = await Order.findOne({"id": newOrder.id})
    //     if (result != null) {
    //         return res.status(250).json({"success": false, "message": "Order already exists in database"})
    //     }

    //     // TODO: insert check conditions

    //     await Order.create(newOrder)
    //     return res.status(201).json({"success": true, "message": "Order added"})
    // } 
    
    // else if (req.method === "DELETE") {
    //     // TODO: insert auth

    //     await Order.deleteMany({"id": id})
    //     return res.status(201).json({"success": true, "message": "Order deleted"})
    // }
    
}





