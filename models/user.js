module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            min: 4,
            max: 50
        }, 
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            min:4,
            max:50
        },    
        email: {
            type: DataTypes.STRING(65),
            allowNull: false,
            unique: true
        },    
        dateOfbirth: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return User;
};
 