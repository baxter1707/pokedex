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

### Home Page
* The center display displays a list of all Pokemon within the database.
* The left display displays different category. Each category will take you to a seperate page and display the list of all Pokemon with that given attribute.<br>
![screen shot 2018-01-22 at 9 58 06 am](https://user-images.githubusercontent.com/31966603/35230294-44e15ac2-ff5b-11e7-87d8-f7e7a060c07f.png)

### Registration Screen
Register the user and upload his/her given information into the database.<br>
![screen shot 2018-01-22 at 9 58 54 am](https://user-images.githubusercontent.com/31966603/35230292-44977f74-ff5b-11e7-8388-f83a195748a9.png)

## Login Page
* Login the user.
* Going into the database and finding the user with what is entered within the inputs
* Express-Session is used to track the user while they are logged in<br>
![screen shot 2018-01-22 at 9 58 19 am](https://user-images.githubusercontent.com/31966603/35230293-44b19e7c-ff5b-11e7-81fa-be31831cce9f.png)

## Create a Pokemon
* Creating a Pokemon and adding it onto the database.<br>
![screen shot 2018-01-22 at 9 59 49 am](https://user-images.githubusercontent.com/31966603/35230286-4439fed0-ff5b-11e7-89bb-8475e25f3ef8.png)

## Update a Pokemon
* Using a "PUT" method to update a Pokemon's information,<br>
![screen shot 2018-01-22 at 9 59 25 am](https://user-images.githubusercontent.com/31966603/35230288-444c46c6-ff5b-11e7-8ae2-13988ab37a58.png)

## Pokemon's ID Page
* The data about the Pokemon stored within the database is displayed on the page.
* A catch button is added which will link the Pokemon to the User.
* A JSON button/href link is added which will display the Pokemon's data in a JSON format.<br>
![screen shot 2018-01-22 at 9 59 05 am](https://user-images.githubusercontent.com/31966603/35230291-446602b4-ff5b-11e7-859b-e9a21d0ee11b.png)

## JSON Format for all the Pokemon that the user has captured<br>
![screen shot 2018-01-22 at 10 00 09 am](https://user-images.githubusercontent.com/31966603/35230305-4bbe728a-ff5b-11e7-8bc9-5885411a5591.png)
