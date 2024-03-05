import express from "express"
import livros from "./livroRoutes.js"
import autores from "./autorRoutes.js"

const routes = (app) =>{
    app.route("/").get((req,res) =>{
        res.send("Curso do Oxetech 123123")
    })
    app.use(express.json(),livros,autores)
}

export default routes;