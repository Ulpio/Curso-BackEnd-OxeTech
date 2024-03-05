import express  from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();

const conexao = await connectDB();

routes(app)

conexao.on("error",(erro) =>{
    console.log("Erro de conexão:\n ",erro)
})
conexao.once("open",() =>{
    console.log("Conectou no mongoDB")
})

export default app
