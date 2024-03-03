const { Router } = require('express');
// Importar todos los routers;
const Professional = require('./RoutesProfessional');
const Category = require('./RoutesCategory.js')

const MainRouter = Router();

MainRouter.use('/professional', Professional);
MainRouter.use('/category', Category);

module.exports = MainRouter;