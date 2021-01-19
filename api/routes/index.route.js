const postRoute = require('./post.route')
const userRoute = require('./user.route')
const loginRoute = require('./login.route')

function apiRoute(app) {
    app.use('/api/post/', postRoute);
    app.use('/api/account/', userRoute);
    app.use('/api/login', loginRoute)
}

module.exports = apiRoute