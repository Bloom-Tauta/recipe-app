# RECIPE SHARE

This is a recipes web app where users can share theri favorite recipes to friends through their socials.

### Things you may want to cover when running the application:

* Database creation

    The Database was created using db diagram out of preferrences.
    To view the ERD diagram click the link below:
    https://dbdiagram.io/d/6436777a8615191cfa8d48ee

* Database initialization

    For the Database we have four tables namely; Users, Reviews, Favorites and Active Storage.

* Deployment instructions

Vercel link (frontend) - https://recipe-share-app.vercel.app/
Render link (backend) - https://recipe-app-gtmt.onrender.com

## API Creation Proccess

* Creating a new Rails API

    Firstly  we run the following command to create a new rails api:
    $ rails new recipe-app --api--minimal --skip-javascript --database=postgresql

* Generating the required Resources

    Run the following commands to generate the three resources

    1. $ rails g resource Users username email password_digest admin favourites
    2. $ rails g resource Reviews ratings:integer comments:text
    3. $ rails g resource Recipes recipe_name recipe_category description:text recipe_thumb country_of_origin number_of_people_served ingredients:text instructions:text youtube_code approved:boolean user:belongs_to
    is_local:boolean
    4. $ rails active_storage:install

* Model Relationships

    - A `User` has many `Recipes` and has many `Reviews`

    - A `Favorites` belongs to a `User` and belongs to an `Recipe`

    - A `Recipe` belongs to `User`

    - A `Review`belongs to `User`, belongs to `Recipe`

## ROUTES

    Each resource has it own specific routes as specified in the ./configroutes.rb folder .
    
     User routes; resources :users

     Review routes; resources :reviews
    
     Favotrites routes; resources :restaurant_pizzas

#### POST / create User


Headers
-------
Content-Type: application/json


Request Body
------
{
  "username": "John Doe",
  "email": "example@email.com",
  "password": "000000",
  "admin": ,
  "favourites": 
}


Response Body
-------
{
  "id": 1,
  "username": "John Doe",
  "email": "example@email.com",
  "password": "000000",
  "admin": false,
  "favourites": false,
  "created_at": "202305000000",
  "updated_at": "202305000000"
}

#### DELETE/ destroy Recipe

Making a DELETE request to this route should delete one recipe from the database.
You should return a response of `head :no_content` to indicate a successful
deletion.

DELETE /recipe/:id

Request Body
{
    id: "1",
    "recipe_name": "Spanish Ommlete",
    "recipe_category": breakfast,
    "description": "A tasty snack for breakfast",
    "recipe_thumb": "images/spanish_omlete",
    "country_of_origin": "Spain,
    "ingredients": "1 Egg, 1/2 Onion, 1/2 Tomato, Tumeric, Spring Onions, Pepper,
    "instructions": Beat the egg into a bowl. Add spices to your liking. Heat the pan. Pour a tablespoon of oil into the pan and fry the onion and the tomatoes. Then pour in the egg mixture and fry until done. Served with bread.,
    "user_id": 1,
}

Response Body
------
no content

#### UPDATE/edit reviews

Making changes to an existing review
You will get a respone accepted if it is successful

PATCH/article/:id

GET/review/:id
{
 "comments": "Greet recipes",
 "ratings": 4
}

Request Body
------
{
 "comments": "Great recipe",
 "ratings": 4
}


Response Body
-------
{
  "id": 1,
  "comments": "Great recipe ",
  "ratings": 4
}




