import express from "express"; 
import {createProduct} from "../controllers/productController.js"
const router = express.Router();
router.get("/product", async (req, res) => {
   res.send("Product Route");
}) 
router.post("/product/createProduct", createProduct);
export default router; 