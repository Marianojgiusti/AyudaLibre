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
        const results = await getProfessionalByIdController(id);
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}



const CreateProfessionalHandler = async (req, res) => {
    const { name, profileImage, specialty, experience, education, certifications, contact, categoryId } = req.body;
    
    try {
      // Verificar que los campos obligatorios estén presentes
      if (!name || !specialty || !experience) {
        return res.status(400).json({ error: 'Faltan campos obligatorios.' });
      }
    
      // Crear el profesional utilizando el controlador
      const newProfessional = await createProfessionalController(
        name,
        profileImage,
        specialty,
        experience,
        education,
        certifications,
        contact,
        categoryId, // Pasa categoryId al controlador
        
      );
    
      // Respuesta exitosa
      return res.status(201).json(newProfessional);
    } catch (error) {
      // Manejar errores
      console.error('Error al crear profesional:', error);
      return res.status(500).json({ error: 'Se produjo un error al crear el profesional.' });
    }
  };



module.exports = {GetProfessionalHandler, GetProfessionalbyIdHandler, CreateProfessionalHandler}