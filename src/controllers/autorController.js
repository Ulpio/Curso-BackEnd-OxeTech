import autorModel from "../models/autorSchema.js";

class autorController{
    static async listarautors(req,res){
        const listaAutor = await autorModel.find({});
        res.status(200).json(listaAutor)
    }
    static async listarAutorPorId(req,res){
        const id = req.params.id
        const autorEncontrado = await autorModel.findById(id)
        res.status(200).json(autorEncontrado)
    }
    static async cadastrarAutor(req,res){
        const novoAutor = await autorModel.create(req.body)
        res.status(201).json(
            {
                message: "Criado com sucesso",
            autorModel: novoAutor
        }
    )
    } 
    static async atualizarAutor(req,res){
        const id = req.params.id
        await autorModel.findByIdAndUpdate(id,req.body)
        res.status(200).json("autor Atualizado")
    }
    static async deletarautor(req,res){
        const id = req.params.id
        await autorModel.findByIdAndDelete(id)
        res.status(200).send("autor Deletado")
    }
}

export default autorController