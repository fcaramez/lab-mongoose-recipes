const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  /* .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  }) */
  /* .then(() => {
    function addRecipe(
      title,
      level,
      ingredients,
      cuisine,
      dishType,
      image,
      duration,
      creator,
      created
    ) {
      const recipe = new Recipe({
        title: title,
        level: level,
        ingredients: ingredients,
        cuisine: cuisine,
        dishType: dishType,
        image: image,
        duration: duration,
        creator: creator,
        created: created,
      });
      recipe
        .save()
        .then((newRecipe) => console.log(newRecipe.title))
        .catch((err) => console.log(err));
    }

    addRecipe(
      "Pasta",
      "Easy Peasy",
      ["pasta", "tomato sauce"],
      "italian",
      "main_course",
      "",
      12,
      "Xico"
    );
  })
  .then(() => {
    function addAll(data) {
      Recipe.insertMany(data)
        .then((recipes) => recipes.forEach(recipe => {
          console.log(recipe.title)
        }))
        .catch((err) => console.log(err));
    }
    addAll(data)
  }) */
  /* .then(() => {
    Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
      .then(() => console.log('Success!'))
      .catch((err) => console.log(err))
  }) */
  .then(() => {
    Recipe.deleteOne({ title: "Carrot Cake"})
    .then(() => console.log('Success!'))
    .catch((err) => console.log(err))
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });


