const express = require('express')
const OngController = require('./controllers/OngController')
const incidenttController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index) 
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', incidenttController.index)
routes.post('/incidents', incidenttController.create)
routes.delete('/incidents/:id', incidenttController.delete)
module.exports = routes;


/**
 * MÉTODOS HTTP:
 *
 * GET:Buscar/Listar uma informação no BACKand
 * POST: Criar uma informação no BACKAND
 * PUT: Alterar uma informação no BackAnd
 * DELETE: Deletar informação no BackAnd
 */

/**
 * TIPOS DE PARÂMETROS:
 *
 * Query Params: Parâmetros nomeados  enviados na rota após "?" (filtros, Paginação)
 *
 * Route Params: Parâmetros utilizados para identificar Recursos
 *
 * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
 *
 *
 */

/**
 *
 */
