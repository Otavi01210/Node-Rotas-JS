import express from "express";
// variável parra acessar os métodos express
const app = express();
// ativa o leitor json
app.use(expresse.json())

// rota saída de dados
app.get('/usuarios',(req, res)=>{
    res.send("Informação Enviada")
    res.json(usuario);
})

app.post('/usuarios',(req, res)=> {
    console.log(req.body);
    usuario.push(req.body)
    res.status(201).jason({mensagem:"Cliente Cadastrado!"})
})

app.listen(3000, ()=>{
    console.log("Servidor Rodando!")
})
// http://localhost:3000