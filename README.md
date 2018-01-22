### The Database
	PostgreSQL
### ORM -Object Relational Mapping
	Sequelize
## Additional Downloaded Packages

### Node JS
	Open source server framework
### Express
	Server side web framework.
### Mustache-Express
	Used for templating
### Method-Override
	Used for accepting “PUT” and ‘DELETE” methods within the HTML form.
### Multer
	Used for storing our uploaded images
### Express-Session
	Used for keeping track of our user’s login.
### Body-Parser
	Used for decoding JSON and grabbing content from the template.

### Intergrating Many to Many
app.get('/home/:id/showuserpokemon', (req,res) => { *separate paragraph*
  models.users.findAll({ *separate paragraph*
      where : {
        id : req.session.userId
      }, include : [{
        required : false,
        model : models.pokemon
      }], raw : false
}).then((user) => {
  res.render('viewuserpokemon', {
    user:user,
    username: req.session.username,
    userId:req.session.userId
  })
 })
})
