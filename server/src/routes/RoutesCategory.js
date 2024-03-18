const {Router} = require("express");
const {CreateCategoryHandler, GetCategoryHandler, GetCategorybyIdHandler} = require ("../handlers/Categoryhandlers.js")

const CategoryRouter = Router()

CategoryRouter.get("/", GetCategoryHandler)

CategoryRouter.post("/", CreateCategoryHandler)

CategoryRouter.get("/:id", GetCategorybyIdHandler)

module.exports = CategoryRouter;