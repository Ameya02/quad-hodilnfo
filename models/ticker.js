
const {
  Model, DataTypes
} = require('sequelize');
const sequelize = require("../config/connection");

class Ticker extends Model {}

  Ticker.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last: { type: DataTypes.STRING,
      allowNull: false, },
    buy: { type: DataTypes.STRING,
      allowNull: false, },
    sell: { type: DataTypes.STRING,
      allowNull: false, },
    volume: { type: DataTypes.STRING,
      allowNull: false, },
    base_unit: { type: DataTypes.STRING,
      allowNull: false, }

  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ticker',
  });
module.exports = Ticker;
