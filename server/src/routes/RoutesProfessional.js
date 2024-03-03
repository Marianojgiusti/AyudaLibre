const {Router} = require("express");
const {GetProfessionalbyIdHandler, GetProfessionalHandler} = require ("../handlers/Professionalhandlers")

const ProfessionalRouter = Router()

ProfessionalRouter.get("/", GetProfessionalHandler)

ProfessionalRouter.get("/:id", GetProfessionalbyIdHandler)

module.exports = ProfessionalRouter;