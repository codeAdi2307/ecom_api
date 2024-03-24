import Express from "express";
import { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } from "../controller/verify.token.js";
import { AddProducts, UpdateProducts, DeleteProducts, GetProductsById, GetProducts } from "../controller/product.controller.js";

const productRouter = Express.Router();
productRouter.get("/", GetProducts)
productRouter.post("/add", verifyTokenAndAdmin, AddProducts)
productRouter.put("/update/:id", verifyTokenAndAdmin, UpdateProducts)
productRouter.delete("/delete/:id", verifyTokenAndAdmin, DeleteProducts)
productRouter.get("/find/:id", GetProductsById)

