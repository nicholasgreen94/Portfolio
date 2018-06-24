// server/routes/index.js
const project = require('./projectRoutes')
module.exports = (router) => {
    project(router)
}
