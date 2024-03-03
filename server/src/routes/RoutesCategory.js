const {Router} = require("express");
const {CreateCategoryHandler, GetCategoryHandler} = require ("../handlers/Categoryhandlers.js")

const CategoryRouter = Router()

CategoryRouter.get("/", GetCategoryHandler)

CategoryRouter.post("/", CreateCategoryHandler)

module.exports = CategoryRouter;