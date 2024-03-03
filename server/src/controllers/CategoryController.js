const axios = require ("axios");
const {Category, Professional} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllCategoryController = async () => {
    const CategoryFind = await Category.findAll({
      include: {
        model: Professional,
        through:{attributes: []},
        attributes: ["name", "profileImage"]
      }
    })
    return CategoryFind;
};

const createCategoryController = async (name, description, iconUrl) => {
  if (!Array.isArray(Professional)) {
    throw new Error('error probando');
  }

  const createcategory = await Category.create({ name, description, iconUrl });

  for (const professionalName of Professional) {
    const findprofessional = await Professional.findOne({
      where: { name: { [Sequelize.Op.iLike]: `%${professionalName}%` } }
    });

    if (findprofessional) {
      await createcategory.addProfessional(findprofessional);
    }
  }

  return createcategory;
}
    

 module.exports = { getAllCategoryController, createCategoryController}