const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Professional', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING, // Almacenamos la URL de la imagen del perfil
      allowNull: true
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education: {
      type: DataTypes.JSONB, // Utilizamos JSONB para almacenar datos estructurados de educación
      allowNull: true
    },
    certifications: {
      type: DataTypes.JSONB, // Utilizamos JSONB para almacenar datos estructurados de certificaciones
      allowNull: true
    },
    contact: {
      type: DataTypes.JSONB, // Utilizamos JSONB para almacenar datos estructurados de contacto
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true // Establece el valor por defecto como activo
    }, 
  },
  {timestamps: false});
 
};