const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        password:{
            type:DataTypes.STRING,
            required:true,
            validate:{
                len:[8]
            },
        },
        email:{
            type:DataTypes.STRING,
            required:true,
            unique:true
        }
    });

    User.associate=function(models) {
        User.hasMany(models.Campaign);
        User.hasMany(models.Character);
    }

    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })

    return User;
}