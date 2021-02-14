const Sequelize = require("sequelize");
const FilmModel = require("./models/film");
const UserModel = require("./models/user");

const sequelize = new Sequelize("prueba-yt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
sequelize
  .sync({
    force: false,
  })
  .then(() => console.log("xd"));

module.exports = {
  Film,
  User,
};
