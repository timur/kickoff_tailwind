=begin
Template Name: Kickoff - Tailwind CSS
Author: Andy Leverenz
Author URI: https://web-crunch.com
Instructions: $ rails new myapp -d <postgresql, mysql, sqlite3> -m template.rb
=end

def source_paths
  [File.expand_path(File.dirname(__FILE__))]
end

def add_gems
  gsub_file 'Gemfile', "gem 'webpacker', '~> 5.0'", "gem 'webpacker', '6.0.0.beta.6'"
end

def add_route
  route "root to: 'home#index'"
end

def copy_files
  directory "app", force: true
  directory "config", force: true
  copy_file "postcss.config.js", "postcss.config.js"
end

def add_packages
  run "yarn add tailwindcss postcss@latest postcss-loader postcss-flexbugs-fixes postcss-preset-env style-loader mini-css-extract-plugin postcss-import@latest autoprefixer@latest @tailwindcss/aspect-ratio css-loader @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography @rails/webpacker"
end

# Main setup
source_paths

add_gems

after_bundle do
  add_route
  copy_files
  add_packages

  # Migrate
  rails_command "db:create"
  rails_command "db:migrate"

  git :init
  git add: "."
  git commit: %Q{ -m "Initial commit" }

  say
  say "Kickoff app successfully created! 👍", :green
  say
  say "Switch to your app by running:"
  say "$ cd #{app_name}", :yellow
  say
  say "Then run:"
  say "$ rails server", :green
end
