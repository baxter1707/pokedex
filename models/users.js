'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

users.associate = (models) => {
  users.belongsToMany(models.pokemon,
    {
      through : 'usertopokemon',
      foreignKey : 'userid'
  })
}

  return users;
};
