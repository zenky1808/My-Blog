const Posts = require('../models/Post');
const { mogooseToObject, mongooseObject } = require('../util/mogoose')

module.exports.index = (req, res) => {
    res.send('<h1>NEWS</h1>')
}
module.exports.show = (req, res, next) => {
    Posts.findOne({ slug: req.params.slug })
        .then(post => {
            res.render('post/show', { post: mongooseObject(post) })
        })
        .catch(next)
}

module.exports.create = (req, res, next) => {
    res.render('post/create')
}
module.exports.add = (req, res, next) => {
    let slug = req.body.title;
    req.body.slug = slug;
    const post = new Posts(req.body);
    post.save()
    res.redirect('/')
}