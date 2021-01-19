const User = require('../models/Account');
const { mogooseToObject } = require('../util/mogoose');

module.exports.login = (req, res, next) => {
    User.findOne({})
        .then(data => {
            res.json(data)
        })
        .catch(next);
}