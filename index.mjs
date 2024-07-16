import express from "express";
import { productRoutes } from "./rutas/rutas.mjs";

const app = express();

app.use(express.json());

app.use("/api", productRoutes)

app.listen(3000, () => {
    console.log("Servidor corriendo");
});

