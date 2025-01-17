/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/packs and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Rails from "@rails/ujs"

// Make accessible for Electron and Mobile adapters
window.Rails = Rails

// ADD YOUR JAVACSRIPT HERE

// Start Rails UJS
Rails.start()

// Styles
// These are imported separately for faster Webpack recompilation
// https://rubyyagi.com/solve-slow-webpack-compilation/
import "stylesheets/base.scss"
import "stylesheets/components.scss"
import "stylesheets/utilities.scss"
