# NPM
- First we must initialize npm:  ```npm init```
  - This will create our package.json
  - The package.json will include project meta data, dependancies, js scripts for development

## Babel  -  ```npm install --save-dev @babel/core @babel/cli```
- --save-dev will save it under devDependancies
- These dependancies are for the packages we need during development
    - Ex Babel, Chai, Mocha
- "dependancies" are for packages used at runtime
    - Ex React, Vue, Axois, Redux

### What is Babel?

- Babel is a transpiler (you can think of this word as converter) that allows us to write ES6+ (ES2015 ECMA standard) and translate it down to ES5 so that most (if not all) browsers can understand and execute your code.
- This is fantastic because you have all of the new language features that aren’t available in older browsers, available in older browsers.

- We can do this with the following command:
- ```npx babel js/main.es6.js -o js/main.js```
- First js file will be the targeted file, then -o (out) the new ES5 to be created
- It is a good idea to throw this into the script portion so we don't have to type this everytime


## Handlebars - ```npm install handlebars```
- Templating language
- To run use ```npx handlebars``` 

## Less - ```npm install less --save-dev```
- Preprocessor for CSS
- This will be for just a single project
- To install globally use "-g" instead of savedev

## Sass - ```npm install node-sass```
- Preprocessor for CSS
- Build command: 
```npx node-sass <input-sass-file.scss> <output-scss-file.css>```
- Can also run --watch

## Mocha:  ```npm install mocha --save-dev```, Chai: ```npm install chai --save-dev```
- For both of these testing libraries, we will also need the dependancy: 
```npm install @babel/register --save-dev``` or
```npm install esm```
- Good idea to add to our scripts: ```npx mocha --require @babel/register```
- The @babel/register transform the code to es5 to be tested
- Chai syntax is assert/should/expect

- To be able to mock our fetch requests we’re going to need a few packages to get up and running so that we can simulate them. Here’s the packages that we’re going to need to simulate them. 
- ESM
    - this is a package we’re going to use instead of babel/register, gives us a simple module loader.
- Fetch-mock
    - Fetch mock is a pretty flexible mocking library to mock your network calls and simulate a response, headers, and other things associated with it.
- Node-fetch 
    - This is a requirement of fetch-mock so we’re going to install it.
- Chai as Promised
    - Chai as promised entends chai so that we can use the assertion library with promises which is pretty neat. To use this under your should declaration you’ll need “chai.use(chaiAsPromised);
- You can install these by using the following command.
```npm install chai-as-promised esm fetch-mock node-fetch --save-dev```

















```javascript
{
  "name": "assignment-01-sample-soln",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "babel": "npx babel js/main.es6.js -o js/dist/main.js",
    "handlebars": "npx handlebars js/src/templates/stock.handlebars -f js/dist/stock-template.js",
    "sass": "npx node-sass css/main.scss css/main.css",
    "build": "npm run handlebars && npm run sass"
    
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "babel-plugin-iife-wrap": "^1.1.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ],
    "plugins": [
      "iife-wrap"
    ]
  },
  "dependencies": {
    "handlebars": "^4.7.3",
    "node-sass": "^4.13.1"
  }
}
```
