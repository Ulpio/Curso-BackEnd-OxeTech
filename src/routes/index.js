import express from "express"
import livros from "./livroRoutes.js" //Aqui importamos o 'routes' de livroRoutes como Livros, um alias
import autores from "./autorRoutes.js" // Mesma coisa de autores

const routes = (app) =>{ //Criamos um unificador das rotas
    app.route("/").get((req,res) =>{
        res.send("Curso do Oxetech 123123")// Resposta se um get for para o localhost:3000/
    })
    app.use(express.json(),livros,autores) //Middleware para ele usar json, rotas de livros e autores//
}

export default routes; //Exporta essas rotas unificadas