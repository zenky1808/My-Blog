const bcrypt = require('bcrypt');
const Model_Account = require('../models/Account')

// Hash Password
function hashPassWord(pass) {
    return bcrypt.hashSync(pass, 10);
}

// Compare password
function comparePass(pass, hashpass) {
    return bcrypt.compareSync(pass, hashpass);
}

// Check email
function checkEmail(email) {
    return Model_Account.findOne({ email: email })
}

module.exports = {
    hashPassWord,
    comparePass
}