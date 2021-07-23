// Importando as libs necessárias
const express = require('express')
const path = require('path')
const cors = require('cors')

// Iniciando uma aplicação express, responsável por abrir uma API
const app = express()

// Resolvendo o problema de CORS
app.use(cors())

// Escolhendo a porta em que o servidor irá executar. Pode ser uma variável de ambiente chamada PORT.
// Se não existir tal variável, será a porta 5000
const port = process.env.PORT || 5000

// Autorizando o uso dos arquivos na pasta /public/images
app.use(express.static('public/Images'))

// // Autorizando o uso dos arquivos na pasta /public/xml
app.use(express.static('public/xml'))

// Indicativo de que o servidor funciona
app.get('/', async (req, res) => {

    res.send('Servidor está no ar')

})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})