# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# User.create(username: "admins", email: "admin@gmail.com", admin: true, password: "admin")

# 50.times do
#   uname = Faker::Name.first_name
#   User.create(
#     {
#       username: uname,
#       email: "#{uname.downcase}@#{Faker::Internet.domain_name}",
#       password: "password",
#       admin: false
#     }
#   )
# end

# require 'httparty'
# require 'faker'

# Favorite.destroy_all
# Review.destroy_all
# Recipe.destroy_all
# User.destroy_all

# puts "Fetching recipes from JSON Server..."

# url = 'http://localhost:3001/meals?_limit=50'
# recipes = HTTParty.get(url).parsed_response

# puts "Fetching recipes from JSON Server..."

# recipes.each do |recipe|
#   # Convert keys to symbols for easier access
#   recipe = recipe.transform_keys(&:to_sym)
#   recipe.delete(:id)
#   recipe.delete(:user_id)
#   recipe[:user_id] = rand(1..50)
#   # Change youtube_code → youtube_url with full link
#   recipe[:youtube_code] = "https://www.youtube.com/watch?v=#{recipe[:youtube_code]}"
#   # Remove "recipe_" prefix from keys
#   # recipe.keys.each do |key|
#   #   if key.to_s.start_with?("recipe_")
#   #     new_key = key.to_s.sub(/^recipe_/, '').to_sym
#   #     recipe[new_key] = recipe.delete(key)
#   #   end
#   # end

#   Recipe.create(recipe)
# end

# puts "Seeding users 🌱.."

# 50.times do
#   User.create!(
#     username: Faker::Internet.unique.username(specifier: 5..8),
#     email: Faker::Internet.unique.email,
#     password: 'password123',        # Use a default password for all seeded users
#     password_confirmation: 'password123',
#     admin: false
#   )
# end

# puts "✅ Done! Seeded #{recipes.size} recipes."
# puts "✅ Done! Seeded #{users.size} users."

require 'httparty'
require 'faker'

# Clear existing data (optional, be careful in production!)
User.destroy_all
Recipe.destroy_all
Favorite.destroy_all
Review.destroy_all

puts 'Deleted data before seeding!!'

puts 'Fetching recipes from JSON Server...'

url = 'http://localhost:3001/meals?_limit=50'
recipes = HTTParty.get(url).parsed_response

puts 'Seeding Recipes 🌱...'

recipes.each do |recipe|
  # Convert keys to symbols for easier access
  recipe = recipe.transform_keys(&:to_sym)
  recipe.delete(:id)
  recipe.delete(:user_id)
  recipe[:user_id] = rand(1..25)
  # Change youtube_code → youtube_url with full link
  recipe[:youtube_code] = "https://www.youtube.com/watch?v=#{recipe[:youtube_code]}"
  # Remove "recipe_" prefix from keys
  # recipe.keys.each do |key|
  #   if key.to_s.start_with?("recipe_")
  #     new_key = key.to_s.sub(/^recipe_/, '').to_sym
  #     recipe[new_key] = recipe.delete(key)
  #   end
  # end

  Recipe.create(recipe)
end

recipes = Recipe.all

puts 'Seeding Users 🌱...'

# Create 25 regular users
25.times do |i|
  User.create(
    username: Faker::Internet.unique.username(specifier: 5..8),
    email: Faker::Internet.unique.email,
    password: 'password123',
    password_confirmation: 'password123',
    admin: false
  )
end

users = User.all

puts 'Seeding Favorites 🌱...'

# Randomly assign favorites - each user favorites 3 random recipes (excluding their own)
users.each do |user|
  favorites = recipes.reject { |r| r.user_id == user.id }.sample(3)
  favorites.each do |recipe|
    Favorite.create!(user: user, recipe: recipe)
  end
end

puts 'Seeding Reviews 🌱...'

# Each user writes 1-2 reviews on random recipes (could be their own or others)
users.each do |user|
  rand(1..2).times do
    Review.create(
      user: user,
      recipe: recipes.sample,
      ratings: rand(1..5),
      comments: Faker::Food.description
    )
  end
end

puts "✅ Done! Seeded #{recipes.size} recipes."
puts "✅ Done! Seeded #{users.size} users."
# puts "✅ Done! Seeded #{favorites.size} favorites."
# puts "✅ Done! Seeded #{reviews.size} reviews."
