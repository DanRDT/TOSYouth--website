import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
        id: String,
        items: [
            {
                id: String,
                name: String,
                price: String,
                image: String,
                color: String,
                size: String,
                variant_id: String,
                quantity: String
            }
        ],
        totals: {
            total: String
        },
        customer_info: {
            first_name: String,
            last_name: String,
            email: String,
            phone: String
        },
        order_status: {
            paid: Boolean,
            ordered: Boolean
        }
}, { collection: 'MerchOrders' })



let MerchOrder
if (mongoose.models.MerchOrder) {
    MerchOrder = mongoose.model("MerchOrder")
} else {
    MerchOrder = mongoose.model("MerchOrder", orderSchema)
}


// const Order = mongoose.model("MerchOrder", orderSchema) 

export default MerchOrder
