import autorModel from "../models/autorSchema.js"; //Importa o Model do Autor

//Arquivo responsável por realizar as operações do Autor

class autorController{ //Criamos uma classe
    static async listarautors(req,res){ //Método deve ser static e async pois não vamos instanciar a classe
        // E temos que esperar a resposta do servidor
        const listaAutor = await autorModel.find({}); // O proprio modelo tem o método find, que vai procurar todos os autores
        res.status(200).json(listaAutor) //Retorna pra gente, se for status 200, a lista dos autores
    }
    static async listarAutorPorId(req,res){
        const id = req.params.id //Pega o parametro ID da requisição
        const autorEncontrado = await autorModel.findById(id)// Usa o metodo findByID, e procur apelo ID
        res.status(200).json(autorEncontrado) //Retorna o autor do ID especificado
    }
    static async cadastrarAutor(req,res){ //Permite criar um novo autor no banco
        const novoAutor = await autorModel.create(req.body) //Pega as informações do Body para criar o autor
        res.status(201).json(//Retorna uma mensagem e a informação do autor criado
            {
                message: "Criado com sucesso",
            autorModel: novoAutor
        }
    )
    } 
    static async atualizarAutor(req,res){ //Atualiza o autor
        const id = req.params.id //Recebe o Id da requisição
        await autorModel.findByIdAndUpdate(id,req.body) // Encontra o autor e atualiza com o conteudo do body
        res.status(200).json("autor Atualizado") // Mensagem de sucesso
    }
    static async deletarautor(req,res){ //Deleta um autor
        const id = req.params.id // Recebe o ID da requisição
        await autorModel.findByIdAndDelete(id) // Encontra pelo Id e deleta
        res.status(200).send("autor Deletado") // Mensagem de sucesso
    }
}

export default autorController //Exporta o Controller do autor