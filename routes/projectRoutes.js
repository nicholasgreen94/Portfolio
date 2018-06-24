// server/routes/article.js
const projectcontroller = require('./../controllers/controller')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    router
        .route('/work')
        .get(projectcontroller.getAll)
}
