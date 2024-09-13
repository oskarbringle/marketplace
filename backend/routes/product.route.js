import express from "express";

import { getProducts, postProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;