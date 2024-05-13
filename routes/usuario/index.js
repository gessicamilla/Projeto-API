// Importar o servidor express
const express = require("express")
//importar a conexão com o banco de dados
const con = require("../../database/conexao")
//fazer importação  do comando Routes para configurar as rotas
const router = express.Router()
//endpoint para cadastrar os usuários
router.post("/insert",(req,res)=>{
    con.query("INSERT INTO usuario SET ?", req.body,(erro,resultado)=>{
        if(erro){
            return res.status(500).send({msg:`Erro inesperado: ${erro} `})
        }
        res.status(201).send({msg:"Usuário Cadastrado",payload:resultado})
    })
})
//para usar a rota do usuário no arquivo de entrypoint(index.js), devemos
//exportá-lo
module.exports = router;