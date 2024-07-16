export const supportedCurrencies = (req, res, next) => {
    console.log("soy el middleware de la ruta")
    res.locals.currencies = {
        currencies: ["ars", "usd", "cop"]
    }
    next()
}