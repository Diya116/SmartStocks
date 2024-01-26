import asyncHandler from "express-async-handler";
// import Product from "../models/Product"
const createProduct = asyncHandler(async (req, res) => {
    const { name, sku, category, quantity, price, description } = req.body;
    if (!name || !category || !quantity || !price || !description) {
        res.status(400);
        throw new Error("Please fill in all fields");
      }
    
      // Create Product
    //   const product = await Product.create({
    //     name,
    //     sku,
    //     qty,
    //     price,
    //     weight,
    //     description,
    //      eplatform,
    //     supplierid,
    //     expirydate,
    //     category,
    //     brand 
    //   });
    
    //   res.status(201).json(product);
    });
    module.exports = {
        createProduct
      };