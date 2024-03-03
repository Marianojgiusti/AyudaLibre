const {Router} = require("express");
const {GetProfessionalbyIdHandler, GetProfessionalHandler, CreateProfessionalHandler} = require ("../handlers/Professionalhandlers")

const ProfessionalRouter = Router()

ProfessionalRouter.get("/", GetProfessionalHandler)
ProfessionalRouter.post("/", CreateProfessionalHandler)

ProfessionalRouter.get("/:id", GetProfessionalbyIdHandler)

module.exports = ProfessionalRouter;