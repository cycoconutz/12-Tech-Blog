const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    body: {
      type: DataTypes.STRING,
    },
    post_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscores: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
