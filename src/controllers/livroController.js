import livroModel from "../models/livroSchema.js";

class livroController{
    static async listarLivros(req,res){
        const listaLivro = await livroModel.find({});
        res.status(200).json(listaLivro)
    }
    static async listarLivroPorId(req,res){
        const id = req.params.id
        const livroEncontrado = await livroModel.findById(id)
        res.status(200).json(livroEncontrado)
    }
    static async cadastrarLivro(req,res){
        const novoLivro = await livroModel.create(req.body)
        res.status(201).json(
            {
                message: "Criado com sucesso",
            livroModel: novoLivro
        }
    )
    } 
    static async atualizarLivro(req,res){
        const id = req.params.id
        await livroModel.findByIdAndUpdate(id,req.body)
        res.status(200).json("Livro Atualizado")
    }
    static async deletarLivro(req,res){
        const id = req.params.id
        await livroModel.findByIdAndDelete(id)
        res.status(200).send("Livro Deletado")
    }
}

export default livroController