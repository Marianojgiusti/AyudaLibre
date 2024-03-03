const axios = require ("axios");
const {Professional, Category} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllProfessionalController = async () => {
    const Professionalfind = await Professional.findAll({
        include: {
            model: Category,
            atributtes: [],
            through:{atributtes: []} 
        }
    });
    return Professionalfind;
};


const searchProfessionalByNameController = async (name) => {
    const Professionalfindname = await Professional.findAll({
        where: { name:{[Sequelize.Op.iLike]: `%${name}%`} },
        include:{
            model: Category,
            atributtes: ["name", "description", "iconUrl"]
        }
        })
     
         return Professionalfindname; 
    };


const getProfessionalByIdController = async (id) => {
    let findById = await Professional.findOne({
        where: { id: id},
        include: { model: Category,
        atributtes: ["name", "description", "iconUrl"]
         }
    
    });
    return findById;
}




module.exports = {getAllProfessionalController, searchProfessionalByNameController, getProfessionalByIdController}