import mongoose from "mongoose";
//Importa o Mongoose

const autorSchema = mongoose.Schema({ //Criamos um Schema, que são as regras daquele tipo de dado
    //Aqui definimos os campos e o tipo dos dados
    id: {type: mongoose.Schema.ObjectId},
    nome: {type: String, required : true},
    nacionalidade: {type: String},
    anoNascimento: {type: Number}
},{versionKey: false} //Definição padrão
)

const autorModel = mongoose.model("autores",autorSchema) //Relacionamos o Schema de autor com a collection autores lá do mongoDB

export default autorModel //Exportamos o autorModel