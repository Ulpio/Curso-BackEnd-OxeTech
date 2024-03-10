// Arquivo Responsável por realizar a conexão no banco de dados

import mongoose from "mongoose" // Importando o módulo mongoose para contectar no mongoDB

URL ="mongodb+srv://dataulpio:admin@123@oxetech.dobku14.mongodb.net/livraria?retryWrites=true&w=majority&appName=oxetech" //URL da sua conta MongoDB

async function connectDB(){ // Função que conecta no Mongo
    mongoose.connect(URL) // Mongoose tenta realizar a conexão no link
    return mongoose.connection // Retorna a conexão
}

export default connectDB // Exporta a função