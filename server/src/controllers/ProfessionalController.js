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

const createProfessionalController = async (req, res) => {
    const { name, profileImage, specialty, experience, education, certifications, contact, categoryId } = req.body;
  
    try {
      // Crea el profesional
      const professional = await Professional.create({
        name,
        profileImage,
        specialty,
        experience,
        education,
        certifications,
        contact,
        isActive: true
      });
  
      // Encuentra la categoría basada en el ID recibido
      const category = await Category.findByPk(categoryId);
  
      // Asocia el profesional con la categoría
      if (category) {
        await professional.addCategory(category);
      } else {
        throw new Error('No se encontró la categoría especificada.');
      }
  
      // Si todo fue exitoso, envía una respuesta exitosa
      return res.status(201).json({ message: 'Profesional creado exitosamente.' });
    } catch (error) {
      // Si ocurre algún error, envía un mensaje de error
      console.error('Error al crear profesional:', error);
      return res.status(500).json({ error: 'Se produjo un error al crear el profesional.' });
    }
  };
  

  

module.exports = {getAllProfessionalController, searchProfessionalByNameController, getProfessionalByIdController, createProfessionalController}