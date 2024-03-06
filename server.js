import express from "express"
import app from "./src/app.js"

//IMporta o app

app.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000")
})// Mostra que o servidor está rodando