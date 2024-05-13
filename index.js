//importando as configurações don arquivo dotenv
require("dotenv").config();
/*
Vamos imoortar as bibliotecas(dependencia) do servidor express,
banco de dados mysql, segurança de requisições ccom helmet,
informações sobre as requisições com o morgan e outras bibliotecas
*/
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
//Importar a rota de acesso aos endpoints do usuário
const router = require("./routes/usuario")

// Vamos criar uma constante para instanciar o servidor express
//isso permite ativar o servidor
const app = express();
//Ativar o helmet
app.use(helmet());
//Ativar o morgan com informações completas. Opção combined
app.use(morgan("combined"))
//Ativar a manipulação de dados em formato JSON
app.use(express.json())

//Ativar as rotas do usuário
app.use("/api/v1/usuario",router);

//Aplicar a porta de comunicação em 5051
app.listen(process.env.HOST_PORT,()=>console.log("Servidor online em "+process.env.HOST_API+":"+process.env.HOST_PORT));

