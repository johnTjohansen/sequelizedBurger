var orm = require("../config/orm");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len(1)
      }
    },  
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }  
  });
  return Burger;
};

// old code
//var burger = {
//  all: function(cb) {
//    orm.all("burgers", function(res) {
//      cb(res);
//   });
//  },
//  create: function(name, cb) {
//    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//  },
//  update: function(id, cb) {
//    var condition = "id=" + id;
//    orm.update("burgers", {
//      devoured: true
//    }, condition, cb);
//  }
//};

//module.exports = burger;
