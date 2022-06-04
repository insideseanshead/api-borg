module.exports = function(sequelize, DataTypes) {
    const Scroll = sequelize.define('Scroll', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    })

    Scroll.associate = function(models) {
        Scroll.belongsTo(models.Character);
        Scroll.belongsTo(models.User)
    };

    return Scroll
}