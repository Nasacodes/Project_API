const { isValidDate } = require("../validateDate");

module.exports = (sequelize, DataTypes) => {
    let birthDay = isValidDate(this.dateOfbirth);
    const User = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 100],
                notNull: {
                    msg: "Please enter your firstName, cannot be empty"
                }
            }
        }, 
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            min:4,
            max:50
        },    
        email : {
            type : DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: {
                    msg: "Email address cannot be empty, please enter your email address"
                }
            }
        },    
        dateOfbirth : {
            type : DataTypes.STRING(birthDay.date),
            allowNull: false,
            validate : {
                invalidDateString() {
                    let invalidDateString = this.dateOfbirth === birthDay.isValid
                        if (!invalidDateString) {
                            throw new Error(birthDay.message)
                        } else {
                         //...  
                        }
                }
            }
        }
    });
    return User;
};
