import express from 'express'
import mysql from 'mysql2'


// criando conexao com o MYSQL
const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
}).promise()

const app = express()
const PORT = 8080


app.use(express.urlencoded({ extended: true }))
app.use(express.static('.'))

app.listen(PORT, () => {console.log(`Server ta online, A porta é: ${PORT}`)})


app.post("/cadastro", (request, response) =>{
    const dados = {
        name: request.body.name,
        email: request.body.email,
        cpf: request.body.cpf,
        endereco: request.body.endereco,
        senha: request.body.senha
    }
    DB.query(`INSERT INTO clientes(nome, email, cpf, endereco, senha)
                VALUES ('${dados.name}',
                        '${dados.email}',
                        '${dados.cpf}',
                        '${dados.endereco}',
                        '${dados.senha}')`)
    console.log(dados)

    // response.send(console.log("funfado"))
    response.redirect("/index.html")
})

app.post("/cadastro/truncate", (request, response) =>{
    DB.query("truncate clientes")
    console.log("Truncated")
})


