const express = require('express'); //Importando o modulo express para dentro da variavel express. Esaa var passa a conter todas as funcionalidades disponíveis
const routes = require('./routes'); //'./' diz que é um arquivo local, sem ele interpretaria como um pacote
const app = express(); //Criação de uma var para a aplicação, e esta está sendo instanciada
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333); //Porta localhost onde a aplicação vai rodar