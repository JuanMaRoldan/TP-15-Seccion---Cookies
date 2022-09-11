const bcryptjs = require('bcryptjs');
const { check, body } = require("express-validator");
const users = require('../data/usersDataBase.json');

module.exports = [

  body('email')
    .notEmpty()
    .withMessage("Ingresa tu email")
    .bail()
    .isEmail()
    .withMessage("Email no válido"),

  check("pass")
    .notEmpty()
    .withMessage("Ingresa tu contraseña")
    .bail()
    .custom((value, {req}) => {
        const user = users.find(user => user.email === req.body.email);
        if (!user) {
            return false
        }else{
             if(!bcryptjs.compareSync(value,user.pass)){
                return false   
            }
        }
        return true
    })
    .withMessage('Credenciales Invalidas'),
];