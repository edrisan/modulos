var webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry:"./js/scripts.js",
    output:{
        path:__dirname +"/public/js",
        filename: "scripts.min.js"

    }
}