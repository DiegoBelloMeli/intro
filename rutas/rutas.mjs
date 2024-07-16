import express from "express";
import { products } from "../data.mjs";
import { productDetailMiddleware, productMiddleware, searchMiddleware } from "../middlewares/productMiddleware.mjs";
import { supportedCurrencies } from "../middlewares/supportedCurrencies.mjs";

const router = express.Router()

router.get("/products-list", productMiddleware, (req, res) => {
    res.send({
        data: products
    })
})

router.get("/product-detail/:id", productDetailMiddleware, (req, res) => {
    const findeProduct = products.find(product => product.id == req.params.id);

    res.send({
        data: findeProduct
    })
})

router.post("/search", searchMiddleware, (req, res) => {
    const search = req.body.search
    let findeProduct = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()))
    if (!findeProduct)
        findeProduct = "no hay coincidencias"


    res.send({
        data: findeProduct
    })
})

router.get("/currencies", [supportedCurrencies], (req, res) => {
    res.send({
        data: res.locals.currencies
    })
})

export const productRoutes = router
