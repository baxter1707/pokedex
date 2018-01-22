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

![screen shot 2018-01-22 at 9 59 49 am](https://user-images.githubusercontent.com/31966603/35230257-2b13a960-ff5b-11e7-9c5e-6341bce6462f.png)
![screen shot 2018-01-22 at 9 59 49 am](https://user-images.githubusercontent.com/31966603/35230286-4439fed0-ff5b-11e7-89bb-8475e25f3ef8.png)
![screen shot 2018-01-22 at 9 59 25 am](https://user-images.githubusercontent.com/31966603/35230288-444c46c6-ff5b-11e7-8ae2-13988ab37a58.png)
![screen shot 2018-01-22 at 9 59 05 am](https://user-images.githubusercontent.com/31966603/35230291-446602b4-ff5b-11e7-859b-e9a21d0ee11b.png)
![screen shot 2018-01-22 at 9 58 54 am](https://user-images.githubusercontent.com/31966603/35230292-44977f74-ff5b-11e7-8388-f83a195748a9.png)
![screen shot 2018-01-22 at 9 58 19 am](https://user-images.githubusercontent.com/31966603/35230293-44b19e7c-ff5b-11e7-81fa-be31831cce9f.png)
![screen shot 2018-01-22 at 9 58 06 am](https://user-images.githubusercontent.com/31966603/35230294-44e15ac2-ff5b-11e7-87d8-f7e7a060c07f.png)
![screen shot 2018-01-21 at 6 59 09 pm](https://user-images.githubusercontent.com/31966603/35230295-4513d3d0-ff5b-11e7-8cd9-c633acb5c497.png)
![screen shot 2018-01-22 at 10 00 30 am](https://user-images.githubusercontent.com/31966603/35230303-4b2f2814-ff5b-11e7-956d-2e7ebf5d0dc8.png)
![screen shot 2018-01-22 at 10 00 22 am](https://user-images.githubusercontent.com/31966603/35230304-4b99b012-ff5b-11e7-9357-607f8b76f9d3.png)
![screen shot 2018-01-22 at 10 00 09 am](https://user-images.githubusercontent.com/31966603/35230305-4bbe728a-ff5b-11e7-8bc9-5885411a5591.png)
