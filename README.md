Requirements:

1. Compile Next-Gen Javascript Features
2. Handle JSX
3. CSS Autoprefixing
4. Support image imports
5. Optimize code

Instructions for basic webpack config:

1. Webpack config file will be in ./ path in the project named "webpack.config.js"

2. Webpack uses node, so any imports will be node import type.

3. The config file starts with module.exports which is assigned to a object

Properties:

1. module.export hase entry and output property used for what they are named after.
   +Output uses absoulate path so it has to import("path")

2. Devtool property is used for source mapping.

3. Module is an object which will hold rules[] and plugins[].
   - Rules are used for using diffferent loaders which will be modify and optimize
     the development code. (ex: babel-loader, css-loader)
   - Plugins are used for adding functionality (ex: HtmlWebpackPlugin)

Rules Section:

//tbc
