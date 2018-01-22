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
app.get('/home/:id/showuserpokemon', (req,res) => { <br>
  models.users.findAll({ <br>
      where : {	<br>
        id : req.session.userId	<br>
      }, include : [{<br>
        required : false,<br>
        model : models.pokemon<br>
      }], raw : false<br>
}).then((user) => {<br>
  res.render('viewuserpokemon', {<br>
    user:user,<br>
    username: req.session.username,<br>
    userId:req.session.userId<br>
  })<br>
 })<br>
})<br>
