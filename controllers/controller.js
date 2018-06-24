const Project = require('../models/Project')
const fs = require('fs')
module.exports = {
    getAll: (req, res, next) => {
      Project.find({}, function(err, task) {
         if (err)
           res.send(err);
           res.json(task);
        });
    },
}
