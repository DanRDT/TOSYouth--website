import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    id: String,
    name: String,
    date: String,
    description: String,
    price: String,
    image: String
})

export default mongoose.model("Event", eventSchema) 
