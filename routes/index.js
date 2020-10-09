
const newsRoute = require('./new.route')
const siteRoute = require('./site.route')

function route(app) {

    app.use('/news', newsRoute);
    app.use('/', siteRoute);

}

module.exports = route