var crypto = require('crypto');

const User = (sequelize, U) => {
    const Us = sequelize.define('User', {
        id: {
            type: U.INTEGER,
            allowNull: false,
            autoIncrement: true,
            validate: {
                notEmpty: true,
            },
            primaryKey: true,
        },
        firstName: {
            type: U.STRING,
            allowNull: false,
        },
        lastName: {
            type: U.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: U.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
            unique: {
                args: true,
                msg: 'Email address already in use!',
            },
        },
         rol: {
              type: U.ENUM,
              values: ['user', 'admin'],
              defaultValue: 'user',
            },
            password: {
             type: U.STRING,
             allowNull: true,
             set(value) {
               const rSalt = Us.randomSalt();
               this.setDataValue('salt', rSalt);
               this.setDataValue(
                 'password',
                 crypto
                  .createHmac('sha1', this.salt)
                  .update(value)
                  .digest('hex'),
                );
              },
            },
            salt: {
              type: U.STRING,
            },
        });

        Us.randomSalt = function() {
          return crypto.randomBytes(20).toString('hex');
        };

        Us.prototype.validPassword = function(password) {
          return (
            crypto
              .createHmac('sha1', this.salt)
              .update(password)
              .digest('hex') === this.password
          );
        };
    return Us;
}
module.exports = User;
