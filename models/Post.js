const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title: String,
    description: String,
    content: String,
    img: String
});

let Post = mongoose.model('Post', BlogPost, 'posts');
module.exports = Post;