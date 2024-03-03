const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT, // Cambié STRING por TEXT para permitir descripciones más largas
      allowNull: true // Puedes decidir si quieres que la descripción sea obligatoria o no
    },
    iconUrl: {
      type: DataTypes.STRING, // Puedes usar STRING para almacenar la URL del ícono
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true // Establece el valor por defecto como activo
    }
  });
};
