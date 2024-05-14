const express = require("express");

const db = require("./db.js");

const app = express();

const Pizza = require('./models/pizzaModel.js');

// Middleware pour gérer les données JSON
app.use(express.json());

 const pizzasRoute = require('./router/pizzasRoute');

 app.use('/api/pizzas/' , pizzasRoute)


// Route d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur votre application !" +port);
});

app.get('/getpizzas', (req,res) => {
  Pizza.find({}, (err ,docs)=> {
    if (err){
      console.log(err);

    }
    else{
      res.send(docs)

    }
  })
})
const port = process.env.PORT || 3000; // Utilisation du port 3000 par défaut
app.listen(port, () => ' Server running on port port')

