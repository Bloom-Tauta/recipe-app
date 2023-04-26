# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# post = Post.create!(title: "My Title", description: "My description")
# post.image.attach(io: File.open(Rails.root.join("public/images/sample.jpg")), filename: "sample.jpg")
 recipe1=Recipe.create!(
       recipe_name: "General Tso's Chicken",
      description: "Chicken",
      country_of_origin: "Chinese",
      instructions: "DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate",
      # "recipe_image": ("https://www.themealdb.com/images/media/meals/1529444113.jpg"),
      ingredients: "1 1/2 lbs chicken breast, 3/4 cup plain flour, 1 egg, 2 tbs starch, 1 tbs baking powder, 1 tsp salt, 1/2 tsp onion salt, 1/4 tsp garlic powder, 3/4 cup water, 1/2 cup chicken stock, 1/4 cup duck sauce, 3 tbs soy sauce, 2 tbs honey, 1 tbs rice vinegar, 2 tbs sesame seed oil, 1/2 tbs gochujang, 2 tbs starch, 1 clove garlic, 2 chopped spring onions, 1 tsp chopped ginger",
      date_time: "03-02-2000",
      user_id:1,
      number_of_people_served:"7",
      approved:true
 )
 recipe1.recipe_image.attach(io: File.open(Rails.root.join("public/images/sample1.jpg")), filename: "sample1.jpg")
    recipe2=Recipe.create!(
      
      recipe_name: "Bigos (Hunters Stew)",
      description: "Pork",
      country_of_origin: "Polish",
      instructions: "Preheat the oven to 350 degrees F (175 degrees C).\r\n\r\nHeat a large pot over medium heat. Add the bacon and kielbasa; cook and stir until the bacon has rendered its fat and sausage is lightly browned. Use a slotted spoon to remove the meat and transfer to a large casserole or Dutch oven.\r\n\r\nCoat the cubes of pork lightly with flour and fry them in the bacon drippings over medium-high heat until golden brown. Use a slotted spoon to transfer the pork to the casserole. Add the garlic, onion, carrots, fresh mushrooms, cabbage and sauerkraut. Reduce heat to medium; cook and stir until the carrots are soft, about 10 minutes. Do not let the vegetables brown.\r\n\r\nDeglaze the pan by pouring in the red wine and stirring to loosen all of the bits of food and flour that are stuck to the bottom. Season with the bay leaf, basil, marjoram, paprika, salt, pepper, caraway seeds and cayenne pepper; cook for 1 minute.\r\n\r\nMix in the dried mushrooms, hot pepper sauce, Worcestershire sauce, beef stock, tomato paste and tomatoes. Heat through just until boiling. Pour the vegetables and all of the liquid into the casserole dish with the meat. Cover with a lid.\r\n\r\nBake in the preheated oven for 2 1/2 to 3 hours, until meat is very tender.",
      ingredients: "2 sliced Bacon, 1 lb Kielbasa, 1 lb Pork,1/4 cupFlour,3 chopped Garlic,1 Diced Onion,1 1/2 cup Mushrooms,4 cupsCabbage,1 Jar Sauerkraut,1/4 cupRed Wine,1 Bay Leaf,1 tsp Basil,1 tsp Marjoram,1 tbs Paprika,1/8 teaspoon Caraway Seed,1 dash Hotsauce,5 Cups Beef Stock, 2 tbsTomato Puree,1 cup Diced Tomatoes,1 dashWorcestershire Sauce",
      date_time: "03-02-2000",
      user_id:1,
      number_of_people_served:"7",
      approved:true
    )
    recipe2.recipe_image.attach(io: File.open(Rails.root.join("public/images/sample2.jpg")), filename: "sample2.jpg")
    recipe3= Recipe.create!(
      
      recipe_name: "Venetian Duck Ragu",
      description: "Pasta",
      country_of_origin: "Italian",
      instructions: "Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.\r\nCarefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.\r\nCook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like.",
      ingredients: "1 tbls Olive Oil,4 Duck Legs,2 finely chopped Onions,2 cloves minced Garlic,2 tsp ground Cinnamon
        2 tsp ground Plain Flour,
         250ml Red Wine,
         800g Chopped Tomatoes,
         1Chicken Stock Cube,
         3 sprigs Rosemary,
         2 Bay Leaves,
         1 tspSugar,
         2 tbs Milk,
        600g Paccheri Pasta,
        Grated Parmesan Cheese,",
        "date_time": "03-02-2000",
        "user_id":1,
        "number_of_people_served":"7",
        "approved":true
    )
    recipe3.recipe_image.attach(io: File.open(Rails.root.join("public/images/first image.jpg")), filename: "first image.jpg")