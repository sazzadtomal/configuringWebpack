Requirements:

1. Compile Next-Gen Javascript Features
2. Handle JSX
3. CSS Autoprefixing
4. Support image imports
5. Optimize code

Instructions for basic webpack config:

1. Webpack config file will be in ./ path in the project, named "webpack.config.js" for development environment and "webpack.prod.config.js"(can be different name) for building the project for production .

2. Webpack uses node, so any imports will be node import type.

3. The config file starts with module.exports which is assigned to a object

4. While using npm-use:
   Scripts:
   For development environment= start:"webpack-dev-server"
   For building the project= build: "webpack --config webpack.config.prod.js"
   in package.json file.

Properties:

Mode:

1. module.export has entry,output, mode property used for what they are named after.

   +mode: can be development or production used by different script for creating development enviornment or building the project.

   +entry:string = defines the entry point for the project.

   +Output:object =

   +path: uses absoulate path so it has to import("path") (ex: path: path.resolve(\_\_dirname, 'dist/'))
   +filename: filename of the output bundle.
   +publicPath: prefixes in every path of the project.

2. Devtool property is used for source mapping.

3. Module is an object which will hold rules[] and plugins[].
   - Rules are used for using diffferent loaders which will be modify and optimize
     the development code. (ex: babel-loader, css-loader)
   - Plugins are used for adding functionality (ex: HtmlWebpackPlugin)

Rules Section:

Rules section which is an array is comprises of different objects for different loaders. Every object contains properties :

      + test : regex = which will include file extention for the files to be searched. (ex: /\.(?:js|mjs|cjs)$/ )
      + exclude: regex = excludes some folder.

      +use: object =
             +loader: string = name of the loader.
             +options: objects = configuration for the specific loaders.

                  *May contain properties like (ex: presets[],plugins)
                  *In case of multiple loaders_ use is an array which contains different objects for different loaders.

Plugins Section:

Plugins section is an array which contains different plugins.

Some Common Loaders and plugins for React:

Loaders:

Javascript : Babel = js transpiler for jsx and proposed js features.

- Needs different presets and plugins for different purposes.

      ==>'@babel/preset-env',"@babel/preset-react"
      ==> "@babel/plugin-proposal-class-properties".

CSS :

+CSS-loader = seraches for css,imports and implement css modules.
+Style-loader =injects css to html.
+Postcss-loader = css loader to modilfy css to support various browsers and do more using plugins. (ex; autoprefixer)

Plugins:

+HtmlWebpackPlugin : modifies given html with webpack configurations.
