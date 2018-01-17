
const expressValidator = require('express-validator')
const mustacheExpress = require('mustache-express')
const methodOverride = require('method-override')
const session = require('express-session')
const bodyParser = require('body-parser')
const models = require('./models')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use('/public', express.static('public'))
app.engine('mustache', mustacheExpress())
app.use(methodOverride('_method'))
app.set('view engine', 'mustache')
app.use(expressValidator())
app.set('views', './views')


app.use(session({
  secret : 'keyboard cat',
  resave : false,
  saveUninitialized : true
}))
/*
models.users.create({

})

models.users.destroy({
  where:{
    id : 34
  }
})
*/

// STARTING POINT FOR THE ROUTES / GETS
// REDIRECT TO THE HOME PAGE
app.get('/', (req,res) => {
  res.redirect('/home')
})

// ROUTE FOR HOME PAGE AND DISPLAY ALL POKEMON
app.get('/home',(req,res) => {
  models.pokemon.findAll().then(pokemon => {
    res.render('home', {
      // access the keys through the view engine
      // access pokemon by calling "pokemon"
      pokemon:pokemon,
      // access the stored session username by calling "username"
      username : req.session.username,
      userId : req.session.userId
    })
  })
})

// ROUTE FOR USERS TO BE DISPLAYED IN A JSON FORMAT
app.get('/home/users', (req,res) => {
  models.users.findAll().then((users) =>{
    res.send(users)
  })
})

// ROUTE FOR REGISTERUER PAGE
app.get('/home/registeruser', (req,res) => {
  res.render('registeruser')
})

// ROUTE FOR LOGIN PAGE
app.get('/home/userlogin', (req,res) => {
    res.render('userlogin')
})

// LOGOUT USER
app.get('/home/userlogout', (req,res) => {
  // protocol to end the session (destroy the stored cookie/logout the user)
  req.session.destroy((err) => {})
  res.redirect('/home')
})

// USER ID ROUTE
app.get('/home/:id', (req,res) => {
  res.render('showuser', {
    username : req.session.username
  })
})

// SHOW POKEMON ID ROUTE
app.get('/home/pokemon/:id', (req,res) => {
  models.pokemon.findAll().then((pokemon) => {
    res.render('showpokemon', {
      pokemon : pokemon,
      username : req.session.usernamen
    })
  })
})

// STARTING POINT FOR THE POSTS
// REGISTERING THE USER
app.post('/home/registeruser', (req,res) => {
  // assign to user to a constant thencreate a user based on the information
  // given through the mustache template
  const user = models.users.build({
    username: req.body.username, password: req.body.password,
    firstname: req.body.firstname, lastname: req.body.lastname,
    email: req.body.email
  })
  // save the user
  user.save().then((user) => {
    req.username = user.username
    // authenticate the user
    req.session.authenticated = true
    res.redirect('/home/userlogin')
  })
})

// LOGGING IN THE USER
app.post('/home/userlogin', (req,res) => {
  // find the user in the database, assign it to a variable "user"
  var user = models.users.findOne({
    where:{
      username : req.body.username,
      password : req.body.password
    }
    // give me the user
  }).then(user => {
    // if password in "user" matches the entered password through the body
    if(user.password == req.body.password) {
      // assign it to a session. The username is now stored in a session
      //and can be accessed anywhere as shown in the "app.get('/home')"
      req.session.username = req.body.username
      // same goes for the id.
      req.session.userId = user.dataValues.id
      // authenticat the login action like done in registering the user
      req.session.authenticated = true
      res.redirect('/home')
    } else {
      res.send('Login attempt failed')
    }
  })
})

app.post('/home/catchpokemon/:id', (req,res) => {
  models.usertopokemon.create({
    userid : req.session.userId,
    pokeid : req.params.id
  })
})

// LISTENING TO ROUTES
app.listen(3000, () =>{
  console.log('We are live on channel 3000')
})
