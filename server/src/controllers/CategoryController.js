const axios = require ("axios");
const {Category, Professional} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllCategoryController = async () => {
    const CategoryFind = await Category.findAll({
      include: {
        model: Professional
      }
    })
    return CategoryFind;
};

const searchCategoryByNameController = async (name) => {
  const Categoryfindname = await Category.findAll({
      where: { name:{[Sequelize.Op.iLike]: `%${name}%`} },
      include:{
          model: Professional
      }
      })
   
       return Categoryfindname; 
  };

const createCategoryController = async (name, description, iconUrl) => {
    // Verifica si la categoría ya existe en la base de datos
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory ) {
      throw new Error('La categoría ya existe.');
    } else {
       // Crea la categoría en la base de datos
    const newCategory = await Category.create({ name, description, iconUrl });

    // Asocia la categoría con los profesionales que contienen el nombre de la categoría
    const professionalsWithCategoryName = await Professional.findAll({
      where: { name: { [Sequelize.Op.iLike]: `%${name}%` } }
    });

    // Asocia la categoría con cada profesional encontrado
    for (const professional of professionalsWithCategoryName) {
      await newCategory.addProfessional(professional);
    }

    // Retorna la nueva categoría creada
    return newCategory;
    }
  } 
 
  const getCategoryByIdController = async (id) => {
    let findById = await Category.findOne({
      where: { id: id}
  
  });
  return findById;

  }




 module.exports = { getAllCategoryController, createCategoryController, searchCategoryByNameController, getCategoryByIdController}