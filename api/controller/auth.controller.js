
const jwt = require('jsonwebtoken');
const Model_Account = require('../../models/Account');
const { comparePass, hashPassWord } = require('../../util/auth');


module.exports.login = (req, res, next) => {
    let email = req.body.email;
    let pass = req.body.password;
    Model_Account.findOne({ email: email })
        .then(data => {
            if (data) {
                if (comparePass(pass, data.password)) {
                    let token = jwt.sign({ id: data._id }, 'privateKey', { expiresIn: "2d" });
                    return res.status(200).json({
                        status: 200,
                        message: 'Đăng nhập thành công',
                        token,
                        id: data._id,
                        userName: data.user
                    })
                } else {
                    return res.status(400).json({
                        status: 400,
                        message: 'Sai tai khoan hoac mat khau',
                    })
                }
            } else return res.status(400).json({
                status: 404,
                message: 'Sai tai khoan hoac mat khau',
            })
        }).catch(err => {
            res.status(400).json({
                status: 505,
                message: `Lỗi server ${err}`,
            })
        })
}
