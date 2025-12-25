# Recipe Share – Backend (Ruby on Rails)

The backend API for the Recipe Share platform. It handles authentication, recipe management, user accounts, and social sharing data.

### 🚀 Features

- User authentication and authorization

- CRUD operations for recipes

- Secure API endpoints

- Image uploads (if applicable)

- Designed to integrate seamlessly with a React frontend

### 🛠️ Tech Stack

1. Ruby on Rails

2. PostgreSQL

3. Active Record

4. RESTful API

### 📦 Requirements

1. Ruby (this project uses version 2.7.4)

2. Rails

3. PostgreSQL

4. Bundler

### ⚙️ Installation

Clone the repository:

``` bash
 $ git clone https://github.com/bloom-tauta/recipe-app 
 ```

``` ruby
$ cd backend
```


Install dependencies:

``` ruby
$ bundle install
```

Setup the database:
``` ruby
$ rails db:create
$ rails db:migrate
```


(Optional) Seed the database:
``` ruby
$ rails db:seed
```


Start the Rails server:
``` ruby
$ rails server
```

The API will be available at:

``` bash
http://localhost:3000
```

### 🔐 Environment Variables

Create a .env file if required
Here you can store environemnt varibales for databases and other third party software.
``` bash
DATABASE_URL=you_db_url
SECRET_KEY_BASE=your_secret_key
```
### 🧪 Running Tests (Optional)
``` ruby
$ rails test
```