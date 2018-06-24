const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    name: String,
    uri_name: String,
    main_image: String,
    description: String,
    tags: Array,
    url: String,
    preview_photo: Array,
    photos: Array,
    view_button_text: String
})


module.exports = mongoose.model('Project', ProjectSchema)
