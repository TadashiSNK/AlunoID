import express from 'express'
import mysql from 'mysql2'


// criando conexao com o MYSQL
const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'AlunoIDSQL'
}).promise()

const app = express()
const PORT = 8080


app.use(express.urlencoded({ extended: true }))
app.use(express.static('.'))

app.listen(PORT, () => {console.log(`Server ta online, A porta é: ${PORT}`)})


app.post("/cadastro", (request, response) =>{
    const dados = {
        name: request.body.name,
        senha: request.body.senha
    }
    DB.query(`INSERT INTO users(usernames, passwords)VALUES ("${dados.name}","${dados.senha}")`);
    console.log(dados)

    // response.send(console.log("funfado"))
    response.redirect("/index2.html")
})

app.post("/login", (request, response) =>{
    const dados = {
        name: request.body.name,
        senha: request.body.senha
    }
    console.log(dados)

    response.redirect("/index2.html")
})

app.post("/cadastro/truncate", (request, response) =>{
    DB.query("truncate clientes")
    console.log("Truncated")
})


