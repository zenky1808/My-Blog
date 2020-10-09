const Posts = require('../models/Post');
const { mogooseToObject } = require('../util/mogoose')

module.exports.index = (req, res, next) => {
    Posts.find({})
        .then(post => res.render('home', {
            post: mogooseToObject(post)
        }))
        .catch(next);
}

module.exports.about = (req, res) => {
    res.render('about')
}

module.exports.contact = (req, res) => {
    res.render('contact')
}