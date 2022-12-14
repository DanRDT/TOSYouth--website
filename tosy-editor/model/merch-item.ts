import mongoose from 'mongoose'

const sizeSchema = new mongoose.Schema({
    size: String,
    variant_id: String,
    variant_price: String
})

const colorVariantSchema = new mongoose.Schema({
    color: String,
    hexCode: String,
    images: [String],
    sizes: [sizeSchema]   
})


const itemSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: String,
    color_variants: [colorVariantSchema]
})


export default mongoose.model("Item", itemSchema) 
