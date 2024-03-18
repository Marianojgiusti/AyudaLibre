const {getAllCategoryController, createCategoryController, searchCategoryByNameController, getCategoryByIdController} = require ("../controllers/Categorycontroller")

const GetCategoryHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const results = name ? await searchCategoryByNameController(name)  : await getAllCategoryController();
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const CreateCategoryHandler = async (req, res) => {
    const { name, description, iconUrl } = req.body;
    try {
        const newCategory = await createCategoryController(name, description, iconUrl)
        res.status(200).json(newCategory)
    }
    catch (error) {
        res.status(404).json({error:error.message})
    }
}
const GetCategorybyIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const results = await getCategoryByIdController(id);
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { GetCategoryHandler, CreateCategoryHandler, GetCategorybyIdHandler }