const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  hasGluten: {
    type: Boolean
  },
  image:{
    type: String,
    default: 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  }
})

module.exports = mongoose.model('Bread', breadSchema)

//MVC - MODELS  DATA- VALIDATION / VIEWS-  /CONTROLLERS-  COMBINE MODELS AND VIWES
// always async
// help methods
// Model.deleteMany()
//Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()
