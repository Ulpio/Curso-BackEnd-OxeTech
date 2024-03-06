//Responsável por realizar as rotas de autor

import autorController from "../controllers/autorController.js";
import express from "express"

const routes = express.Router() //Criamos o roteador de autores

//Fazemos a relação de todos os links com as operações do controller
routes.get("/autores",autorController.listarautors)
routes.get("/autores/:id",autorController.listarAutorPorId)
routes.post("/autores",autorController.cadastrarAutor)
routes.put("/autor/:id",autorController.atualizarAutor)
routes.delete("/autor/:id",autorController.deletarautor)

//Exportamos as rotas
export default routes