var bcrypt = require("bcrypt");
//
// Creating the User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCreate: function(user) {
          user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
          );
        }
      }
    }
  );

  //This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
