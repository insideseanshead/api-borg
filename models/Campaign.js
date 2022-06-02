module.exports = function(sequelize, DataTypes) {
    const Campaign = sequelize.define('Campaign', {
        name: DataTypes.STRING
    });

    Campaign.associate = function(models) {
        Campaign.hasMany(models.Character)
        Campaign.belongsTo(models.User)
    }

    return Campaign;
}