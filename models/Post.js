const { Sequelize, Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'user',
        key: 'id',
      },

    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
