# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# User.create(username: "admins", email: "admin@gmail.com", admin: true, password: "admin")

# require 'json'
# require 'faker'

# Clear existing data
# User.destroy_all
# Recipe.destroy_all
# Favorite.destroy_all
# Review.destroy_all

# puts 'Deleted data before seeding!!'
# puts 'Loading recipes from db/db.json...'

# puts 'Seeding Users 🌱...'

# 10.times do
#   User.create!(
#     username: Faker::Internet.unique.username(specifier: 5..8),
#     email: Faker::Internet.unique.email,
#     password: 'password123',
#     password_confirmation: 'password123',
#     admin: false
#   )
# end

# users = User.all

# file_path = Rails.root.join("db", "db.json")
# data = JSON.parse(File.read(file_path))

# recipes_data = data['meals']

# puts 'Seeding Recipes 🌱...'

# recipes_data.each do |recipe|
#   recipe = recipe.transform_keys(&:to_sym)
#   recipe.delete(:id)
#   recipe.delete(:user_id)
#   recipe[:user_id] = rand(1..10)

#   Recipe.create!(recipe)
# end

# recipes = Recipe.all

# puts 'Seeding Favorites 🌱...'

# users.each do |user|
#   favorites = recipes.reject { |r| r.user_id == user.id }.sample(3)
#   favorites.each do |recipe|
#     Favorite.create!(user: user, recipe: recipe)
#   end
# end

# puts 'Seeding Reviews 🌱...'

# users.each do |user|
#   rand(1..2).times do
#     Review.create!(
#       user: user,
#       recipe: recipes.sample,
#       ratings: rand(1..5),
#       comments: Faker::Food.description
#     )
#   end
# end

puts "✅ Done! Seeded #{Recipe.count} recipes."
puts "✅ Done! Seeded #{User.count} users."
puts "✅ Done! Seeded #{Favorite.count} favorites."
puts "✅ Done! Seeded #{Review.count} reviews."
