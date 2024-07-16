export const productMiddleware = (req, res, next) => {
    console.log("soy el middleware del productlist no necesitas identficacion")
    next()
}

export const productDetailMiddleware = (req, res, next) => {
    console.log("soy el middleware del detalle si necesitas identficacion")
    next()
}

export const searchMiddleware = (req, res, next) => {
    console.log("soy el middleware del searcch no necesitas identficacion")
    next()
}