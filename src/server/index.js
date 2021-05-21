const { request, response } = require('express');
const express = require('express');

const app = express();
app.use(express.urlencoded());

// routes
app.get('/', (request, response) => {
    console.log("Server was requested!");

    return response.send("Server responded!");
});

app.post('/', (request, response) => {
    console.log("Server was requested via POST!");

    const formBody = request.body;

    console.log('ASSUNTO', formBody.assunto);
    console.log('NOME:', formBody.nome);
    console.log('EMAIL:', formBody.email);
    console.log('MENSAGEM:', formBody.mensagem);

    return response.send("OK!");
});

app.listen(3333, () => {
    console.log("Server initialized on port: 3333");
});