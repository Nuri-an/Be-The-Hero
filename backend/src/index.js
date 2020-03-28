const express = require('express'); //Importando o modulo express para dentro da variavel express. Esaa var passa a conter todas as funcionalidades disponíveis
const routes = require('./routes'); //'./' diz que é um arquivo local, sem ele interpretaria como um pacote
<<<<<<< HEAD
const app = express(); //Criação de uma var para a aplicação, e esta está sendo instanciada
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());
=======
const cors = require('cors');
const app = express(); //Criação de uma var para a aplicação, e esta está sendo instanciada

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

app.use(express.json()); // deve ficar antes das rotas
app.use(cors(corsOptions)); // deve ficar antes das rotas
app.use(routes);
>>>>>>> a96d00f47e87b400b2f7b4e9058ec9c1ceff2cae

app.listen(3333); //Porta localhost onde a aplicação vai rodar