import mongoose, { mongo } from "mongoose";

const autorSchema = mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    nome: {type: String, required : true},
    nacionalidade: {type: String},
    anoNascimento: {type: Number}
},{versionKey: false}
)

const autorModel = mongoose.model("autores",autorSchema)

export default autorModel