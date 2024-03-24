import Product from "../model/Product.js"


export const AddProducts = async (req, res, next) => {
    const { title, price, color, size, categories, img, desc } = req.body;

    const products = { title, price, color, size, categories, img, desc }

    const newProduct = new Product(products)
    try {
        const saveProduct = await newProduct.save()
        res.json(saveProduct)
    } catch (error) {
        res.json(error)
    }
}

export const UpdateProducts = async (req, res, next) => {
    try {
        const prod = await Product.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        res.json(prod)
    } catch (error) {
        res.json(error)
    }
}

export const DeleteProducts = async (req, res, next) => {
    try {
        const prod = await Product.findByIdAndDelete(
            req.params.id
        );
        res.json("Product has been deleted")
    } catch (error) {
        res.json(error)
    }
}

export const GetProductsById = async (req, res, next) => {
    try {
        const prod = await Product.findById(
            req.params.id
        );
        res.json(prod)
    } catch (error) {
        res.json(error)
    }
}

export const GetProducts = async (req, res, next) => {
    try {
        const prod = await Product.find();
        res.json(prod)
    } catch (error) {
        res.json(error)
    }
}


