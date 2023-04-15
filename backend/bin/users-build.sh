#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# bundle exec rails assets:precompile # These lines are commented out because we have an API only app
# bundle exec rails assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed