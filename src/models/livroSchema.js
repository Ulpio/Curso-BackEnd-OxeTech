//Mesmos conceitos de autorSchema

import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id : {type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true},
    nPaginas : { type: Number},
    preco : {type: Number},
},{versionKey: false})

const livroModel = mongoose.model("livros",livroSchema)

export default livroModel