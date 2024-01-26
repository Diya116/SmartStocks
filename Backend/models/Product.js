import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
userId: {type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  sku: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  weight: { type: Number },
  description: { type: String, required: true },
   eplatform: { type: Array, required: true },
  supplierid: { type: String, required: true },
  expirydate: { type: Date, required: true },
  category: { type: String, required: true },
  brand : { type: String, required: true },

}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;