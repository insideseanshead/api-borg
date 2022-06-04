module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        description: DataTypes.TEXT
    });

    Item.associate = function(models) {
        Item.belongsTo(models.Campaign);
        Item.belongsTo(models.Character);
        Item.belongsTo(models.User)
    };

    return Item
}