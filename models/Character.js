module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define('Character', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        class: DataTypes.STRING,
        hpMax: DataTypes.INTEGER,
        hpCurrent: DataTypes.INTEGER,
        strength: DataTypes.INTEGER,
        agility: DataTypes.INTEGER,
        presence: DataTypes.INTEGER,
        toughness: DataTypes.INTEGER,
        weaponOne: DataTypes.STRING,
        weaponOneDmg: DataTypes.INTEGER,
        weaponTwo: DataTypes.STRING,
        weaponOneDmg: DataTypes.INTEGER,
        armor: DataTypes.STRING,
        silver: DataTypes.INTEGER
    });

    Character.associate=function(models) {
        Character.belongsTo(models.Campaign);
        Character.belongsTo(models.User)
    }

    return Character;
}