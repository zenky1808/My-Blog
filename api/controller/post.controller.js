
const Model_Post = require('../../models/Post');

// lay du lieu 
module.exports.getPost = (req, res, next) => {
    Model_Post.find({})
        .then(data => {
            res.json({data: data})
        }).catch(err => {
            res.status(500).json('Loi sever')
        })

}


module.exports.getPostId = (req, res, next) => {
    Model_Post.findOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json('Loi sever')
        })

}

// tao moi du lieu
module.exports.createPost = async (req, res, next) => {
    let slug = req.body.title;
    req.body.slug = slug;
    let create = await Model_Post.create(req.body)
    res.json(create)
}

// Sua du lieu
module.exports.putPost = (req, res, next) => {
    let slug = req.body.title;
    req.body.slug = slug;
    let id = req.params.id
    Model_Post.findByIdAndUpdate(id,
        {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img
        }).then(data => {
            if (data) {
                res.json("Da updata thanh cong")
            } else res.json("Chua  updata thanh cong")
        }).catch(err => {
            res.json("Chua  updata thanh cong" + err)
        })

}

// Xoa du lieu
module.exports.deletePost = (req, res, next) => {
    Model_Post.deleteOne({ _id: req.params.id })
        .then(data => {
            if (data) {
                res.json("Da xoa thanh cong")
            } else res.json("Chua  xoa thanh cong")
        }).catch(err => {
            res.json("xoa khong thanh cong" + err)
        })
}