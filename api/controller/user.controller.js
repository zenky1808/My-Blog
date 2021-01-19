const Model_User = require('../../models/Account');
const { hashPassWord } = require('../../util/auth')
// lay du lieu 
module.exports.getUser = (req, res, next) => {
    Model_User.find({})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json('Loi sever')
        })
}

module.exports.getOneUser = (req, res, next) => {
    Model_User.findOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json('Loi sever')
        })
}

//Them du lieu
module.exports.createUser = (req, res, next) => {
    Model_User.create({
        user: req.body.user,
        email: req.body.email,
        password: hashPassWord(req.body.password),
        isAdmin: req.body.isAdmin,
    }).then(data => {
        if (data) {
            return res.json({
                status: 200,
                message: 'Them thanh cong'
            })
        } else return res.json({
            status: 400,
            message: 'Them that bai'
        })
    }).catch(err => {
        res.json({
            status: 500,
            message: `Them that bai ${err}`
        })
    })
}

//Sua du lieu
module.exports.editUser = (req, res, next) => {
    let id = req.params.id
    Model_User.findByIdAndUpdate(id, {
        user: req.body.user,
        email: req.body.email,
        password: hashPassWord(req.body.password)
    }).then(data => {
        if (data) {
            return res.json({
                status: 200,
                message: 'Update thanh cong'
            })
        } else return res.status.json({
            status: 505,
            message: 'Update that bai'
        })
    }).catch(err => {
        res.json({
            status: 505,
            message: `Loi server  ${err}`
        })
    })
}

// Xoa du lieu
module.exports.deleteUser = (req, res, next) => {
    Model_User.deleteOne({ _id: req.params.id })
        .then(data => {
            if (data) {
                return res.json({
                    status: 200,
                    message: 'Xoa thanh cong'
                })
            } else return res.json({
                status: 501,
                message: 'Xoa that bai'
            })
        }).catch(err => {
            res.json({
                status: 505,
                message: `Loi server  ${err}`
            })
        })
}