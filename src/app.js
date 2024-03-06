import express  from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express(); //Cria o servidor Express

const conexao = await connectDB();// Conecta no banco de dados

routes(app)// Une as rotas de livros e autores

conexao.on("error",(erro) =>{
    console.log("Erro de conexão:\n ",erro)
}) //Se der erro na conexão com o mongo

conexao.once("open",() =>{
    console.log("Conectou no mongoDB")
})//se funcionar a conexão com o mongo

export default app //Exporta o app
