const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();  // O modulo de rotas está agr em uma variável

routes.get('/ongs', ongController.list);

routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);

routes.get('/incidents', incidentController.list);

routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.profileList);

routes.post('/session', sessionController.create);

module.exports = routes;  //Exportando a rota













/**
 * Rota: caminho completo.
 * 
 * Recurso: local específico de destino Normalmente relacionado a uma tabela do bd, por exemplo.
 */

/**
 * Métodos HTTP: 
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE:Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação, etc) (Ex.: /?nome=Nurian&idade=19&autoestima=baixa)
 * Route Params: Parâmetros utilizados para identificar recursos, não precisam ser nomeados (Id) (ex.: /1  ,    está subentendido que "1" será o id, pois /:id é padrão)
 * Request Params: Utilizado para criar u alterar recursos. Utiliza método POST  (Ex.: { "nome": "Nurian Coelho",
 *                                                                                        "idade": 19})
 */

/**
 * app.metodo('ROTA</Recurso>', (REQUISICAO, RESPONTA) => { resposta que aparecera na tela })
*
*/

/**
 * return response.send('Hello Word'); 
 * return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Nurian Coelho',
        status: 'foi'
    }); //Resposta em formato json
 */
/**
     * Rodando e especificando valores no insomnia:
     * 
     * const params = request.query; Retorna todos os parametros requisitados como query
     * const params = request.params; Retorna todos os parametros requisitados como route. É necessário definir '/users/:id' na rota
     * const params = request.body; Retorna a nova requisição criada apartir dos valores enviados. É necessário alterar para 'app.post'. Caso utilize o formato json, add a linha ->  'app.use(express.json());' <- antes das rotas, para converter o json em um objeto js
     * 
     * console.log(params); Printa no teminal aqui o retorno
     */ 