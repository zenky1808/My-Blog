
const newsRoute = require('./new.route')
const siteRoute = require('./site.route')

function route(app) {

    app.use('/post', newsRoute);
    app.use('/', siteRoute);

}

module.exports = route