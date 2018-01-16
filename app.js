const mustacheExpress = require('mustache-express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const models = require('./models')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.engine('mustache', mustacheExpress())
app.use(methodOverride('_method'))
app.set('view engine', 'mustache')
app.set('views','/views')


// STARTING POINT FOR ROUTES
app.get('/', (req,res) => {
  models.users.findAll({
    where:{
      id : 1
    }, include : [{
      required : false,
      model : models.pokemon
    }],
    raw : false
  })
  .then((info) => {
    res.json({info:info})
  })
})





app.listen(3000,function(req,res){
  console.log("Server has started")
})
