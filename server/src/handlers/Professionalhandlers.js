const {searchProfessionalByNameController, getAllProfessionalController, getProfessionalByIdController, createProfessionalController} = require ("../controllers/ProfessionalController")

const GetProfessionalHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await searchProfessionalByNameController(name) : await getAllProfessionalController()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const GetProfessionalbyIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const country = await getProfessionalByIdController(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}





const CreateProfessionalHandler = async (req, res) => {
    const { name, profileImage, specialty, experience, education, certifications, contact, isActive } = req.body;
    try {
        const newProfessional = await createProfessionalController({
            name,
            profileImage,
            specialty,
            experience,
            education,
            certifications,
            contact,
            isActive
        });
        res.status(200).json(newProfessional);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}





module.exports = {GetProfessionalHandler, GetProfessionalbyIdHandler, CreateProfessionalHandler}