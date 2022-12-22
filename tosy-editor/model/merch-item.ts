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
    color_variants: [colorVariantSchema],
    item_on_sale: Boolean,
    main_image: String
}, { collection: 'Merch' })

itemSchema.post("save", function(doc, next) {
    console.log(doc);
    next()
})


itemSchema.methods.updateItem = function (newItem) {

}


















let MerchItem
if (mongoose.models.MerchItem) {
    MerchItem = mongoose.model('MerchItem');
} else {
    MerchItem = mongoose.model('MerchItem', itemSchema);
}

// const MerchItem =  mongoose.model('MerchItem', itemSchema)

export default MerchItem;

