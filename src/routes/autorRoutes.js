import autorController from "../controllers/autorController.js";
import express from "express"

const routes = express.Router()

routes.get("/autores",autorController.listarautors)
routes.get("/autores/:id",autorController.listarAutorPorId)
routes.post("/autores",autorController.cadastrarAutor)

export default routes