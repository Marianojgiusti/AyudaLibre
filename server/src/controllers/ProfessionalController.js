const axios = require ("axios");
const {Professional, Category} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllProfessionalController = async () => {
    const Professionalfind = await Professional.findAll({
        include: {
            model: Category
           
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

const createProfessionalController = async (
    name,
    profileImage,
    specialty, // Cambiar el nombre del parámetro a specialty
    experience,
    education,
    certifications, 
    contact,
    isActive
) => {
    try {
        // Verifica si el profesional ya existe en la base de datos
        const existingProfessional = await Professional.findOne({ where: { name } });
        if (existingProfessional) {
            throw new Error('El profesional ya existe.');
        }

        // Busca la categoría correspondiente basada en la especialidad del profesional
        const category = await Category.findOne({ where: { name: specialty } });
        if (!category) {
            throw new Error('No se encontró una categoría correspondiente para la especialidad.');
        }

        // Crea el profesional en la base de datos
        const newProfessional = await Professional.create({
            name,
            profileImage,
            specialty,
            experience,
            education,
            certifications,
            contact,
            isActive,
            categoryId: category.id // Asigna el ID de la categoría correspondiente al profesional
        });

        return newProfessional;
    } catch (error) {
        throw new Error('Error al crear el profesional: ' + error.message);
    }
};


  

module.exports = {getAllProfessionalController, searchProfessionalByNameController, getProfessionalByIdController, createProfessionalController}