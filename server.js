import express from "express"

const app = express();

app.use(express.json())

app.get("/",(req,res) =>{
    res.status(200).send("Curso do OxeTech")
})

const livros = [
    {
        id: 1,
        titulo:"Senhor dos Aneis"
    },{
        id: 2,
        titulo: "Silmarillion"
    }
]

app.get("/livros",(req,res) =>{
    res.status(200).json(livros)
})

app.post("/livros",(req,res) =>{
    livros.push(req.body)
    res.status(201).send("Livro foi criado com sucesso")
})

const autores = [
    {
        id: 1,
        nome: "J.R.R. Tolkien"
    }
]

app.get("/autores",(req,res) =>{
    res.status(200).json(autores)
})

app.post("/autores",(req,res) =>{
    autores.push(req.body)
    res.status(201).send("Autor foi criado com sucesso")
})

app.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000")
})