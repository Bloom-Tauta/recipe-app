# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# User.create(username: "Me", password_digest: "123")
# In your seed file
#  Recipe.create(
#   recipe_name: "General Tso's Chicken",
#   description: "Chicken",
#   number_of_people_served: "5",
#   country_of_origin: "Chinese",
#   instructions: "DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate",
#   ingredients: [
#     "Chicken Breast",
#     "Plain Flour",
#     "Egg",
#     "Starch",
#     "Baking Powder",
#     "Salt",
#     "Onion Salt",
#     "Garlic Powder",
#     "Water",
#     "Chicken Stock",
#     "Duck Sauce",
#     "Soy Sauce",
#     "Honey",
#     "Rice Vinegar",
#     "Sesame Seed Oil",
#     "Gochujang",
#     "Starch",
#     "Garlic",
#     "Spring Onions",
#     "Ginger"
#   ],
#   recipe_image: "https://www.themealdb.com/images/media/meals/1529444113.jpg"
# )

# # Attach image to the recipe using the image URL
# # recipe.image.attach(io: File.open("https://www.themealdb.com/images/media/meals/1529444113.jpg"), filename: "image.jpg")
# # recipe.recipe_image.attach(io: image, filename: 'recipe_image.jpg', content_type: 'image/jpg')

# recipe = Recipe.create(
#   recipe_name: "General Tso's Chicken",
#   description: "Chicken",
#   number_of_people_served: "7",
#   country_of_origin: "Chinese",
#   instructions: "DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate",
#   ingredients: [
#     "Chicken Breast",
#     "Plain Flour",
#     "Egg",
#     "Starch",
#     "Baking Powder",
#     "Salt",
#     "Onion Salt",
#     "Garlic Powder",
#     "Water",
#     "Chicken Stock",
#     "Duck Sauce",
#     "Soy Sauce",
#     "Honey",
#     "Rice Vinegar",
#     "Sesame Seed Oil",
#     "Gochujang",
#     "Starch",
#     "Garlic",
#     "Spring Onions",
#     "Ginger"
#   ],
#   recipe_image: "https://www.themealdb.com/images/media/meals/1529444113.jpg"
#     # "strSource": "https://www.skinnytaste.com/general-tsos-chicken/"
# )
# # recipe.recipe_image.attach(io: image, filename: 'recipe_image.jpg', content_type: 'image/jpg')
# recipe.recipe_image.attach(io: image, filename: 'recipe_image.jpg', content_type: 'image/jpg')
Recipe.create(
  recipe_name: "General Tso's Chicken",
  description: "A classic Chinese-American dish, featuring crispy fried chicken tossed in a sweet and spicy sauce.",
  number_of_people_served: "4",
  country_of_origin: "China",
  instructions: "1. In a bowl, whisk together 1/4 cup cornstarch, 1/4 cup flour, 1/2 teaspoon baking powder, and 1/2 teaspoon salt. Add 1/4 cup water and 1/4 cup vodka, and whisk until smooth. Add 1 pound boneless, skinless chicken thighs, cut into bite-sized pieces, and toss to coat.\n2. In a large skillet, heat 1/2 inch of vegetable oil over medium-high heat until hot but not smoking. Working in batches, add the chicken and fry until golden and crispy, about 4-5 minutes. Use a slotted spoon to transfer the chicken to a paper towel-lined plate.\n3. In a clean skillet, heat 1 tablespoon vegetable oil over medium heat. Add 2 cloves minced garlic and 1 teaspoon grated ginger, and cook until fragrant, about 30 seconds. Add 1/2 cup chicken broth, 2 tablespoons soy sauce, 2 tablespoons hoisin sauce, 2 tablespoons rice vinegar, 1 tablespoon honey, and 1/2 teaspoon red pepper flakes. Bring to a simmer and cook until slightly thickened, about 2 minutes.\n4. Return the chicken to the skillet and toss to coat with the sauce. Cook for 1-2 minutes until heated through.\n5. Serve the General Tso's chicken over rice, garnished with sliced scallions and sesame seeds.",
  ingredients: [
    "1/4 cup cornstarch",
    "1/4 cup all-purpose flour",
    "1/2 teaspoon baking powder",
    "1/2 teaspoon salt",
    "1/4 cup water",
    "1/4 cup vodka",
    "1 pound boneless, skinless chicken thighs, cut into bite-sized pieces",
    "vegetable oil, for frying",
    "2 cloves garlic, minced",
    "1 teaspoon grated ginger",
    "1/2 cup chicken broth",
    "2 tablespoons soy sauce",
    "2 tablespoons hoisin sauce",
    "2 tablespoons rice vinegar",
    "1 tablespoon honey",
    "1/2 teaspoon red pepper flakes",
    "cooked rice, for serving",
    "sliced scallions, for garnish",
    "sesame seeds, for garnish"
  ],
  recipe_image: "https://www.themealdb.com/images/media/meals/1529444113.jpg"
)
