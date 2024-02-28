import express from "express"

const app = express();

app.use(express.json())

const livros = [
    {
        id: 1,
        titulo:"Senhor dos Aneis"
    },{
        id: 2,
        titulo: "Silmarillion"
    }
]

app.get("/",(req,res) =>{
    res.status(200).send("Curso do OxeTech")
})

app.get("/livros",(req,res) =>{
    res.status(200).json(livros)
})

app.post("/livros",(req,res) =>{
    livros.push(req.body)
    res.status(201).send("Livro foi criado com sucesso")
})

app.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000")
})