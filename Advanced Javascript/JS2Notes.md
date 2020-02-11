#Javascript 2

## Review
- ```let``` and ```const``` are local to the block that they are defined in
- ```var``` are also local to the block that they are defined in OR global scope
- Frameworks are the IDE's that call your code
- Libraries are the external way to call code
## Custom Promises
- Promises allow us to write code that uses async and await in a synchronus manner

````javascript
const completeHomeWork = (didDoHomework) => {
    return new Promise((resolve, reject) => {
        if (didDoHomework) {
            // it takes us 3 seconds to do it.
            setTimeout(()=> {
                resolve("You can go out");
            }, 3000);
        } else {
            // if we didn't do our homework we'll study.
            reject("You need to study");
        }
    });
}
console.log("Can you go out with friends on Monday?")
completeHomeWork(true).then((result) =>{
    console.log(result);
});
// this is a positive result so we can go out.
// Note: we used .then() to process positive results
// As well this is going to print after 3 seconds
console.log("Can you go out with friends on Tuesday?")
completeHomeWork(false).catch((result) =>{
    console.log(result);
});
// this a negative promise result so we can not go out.
// Note: we used .catch() to process negative results
````
## Spread Operator
- The spread operator allows you to spread an array or object into a new array or object
- The prefix of "```...```" before the array/object is the spread operator

## NodeJS and NPM
- Node is open source project that helps talking to networks, I/O sources(input/output, reading/writing)
- NPM is the package manager for node. It allows access to the large open source js applications/code. NPM for JS is like Nuget for C#
- It is a good idea to check the versions of NodeJS and NPM in the termial with ```node -v``` and ```npm -v```
## NPM installing packages and running scripts
- All packages that use npm will have a package.json file
- Initialize npm package in terminal with ```npm init```
- Install packages by using ```npm install <packagename>```
- Using ```--save-dev``` will specify the packages installed will be devDependancies, using -g will install package globally
- there are devDependancies and dependancies
-devDependancies are to specifcy the packages required during development. These will not be included when the project is deployed. Ex. Babel, Chai, Mocha
- dependancies specifies packages that our application will use during runtimes ex. React, Vue

## Babel and ES6+ to ES5
- Babel is a transpiler that allows us to write ES6+ and translates it down to ES5. The reason to do this is that most browsers will be able to understand code in ES5
- Installing Babel ```npm install --save-dev @babel/core @babel/cli @babel/preset-env```
- To see if the output run ```npx babel -h```
- We will use presets, which is a group of modules that transforms the code
- Run the cmd ```npx babel js/main.es6.js --out-file js/main.js --presets=@babel/preset-env``` (note: you can use -o instead of --out-file)
  - “```js/main.es6.js```” is the ES6 file you want transformed.
  -  “```--out-file js/main.js```” specifies the file you want your output your ES5 code to. 
  - “```--presets=@babel/preset-env```” specifies the types of   transformations you’d like to do

- Using this will be allow you to be able to run ```npm run build``` without having to run the ES6 to ES5 cmd
````javascript
"scripts": {
"build": "npx babel js/main.es6.js -o js/main.js"
}
  "babel": {
    "presets": [      
        "@babel/preset-env"
    ]
  }
````

## ESLint
- ESLint is a package that you can install to help make code more consistent and tells you how to make your code more clean
- Installation guide: https://eslint.org/docs/user-guide/getting-started


## Templating 
- Templating allows us to sperate out view logic instead of mixing it into our own code
- The Handlebars is a templating engine that is mainly used for backend development.
  - You can install it with ```npm install handlebars```
  - Some things that handlebars helps us do are loops, with, custom helpers
- We can use the handlebar's runtime to compile the code rather than having the browser do it
  - The command you can use is ```npx handlebars```

1. Create a “handlebars” (example filename: “article.handlebars”) template file.
2. Use the handlebars from when we installed npm ( “npm install handlebars”) to build a precompiled template that we’ll name something like “article.precompiled.js”. We’re going to do this with the following command: ```npx handlebars js/templates/articles.handlebars -f js/templates/articles.precompiled.js ```
3. Then you need to include the precompiled file (“js/templates/articles.precompiled.js”) as a script on your html file like so: ```<script src="js/templates/articles.precompiled.js"></script>```
4. You can now access the precompiled template in js with:let aritclesTemplate = Handlebars.templates.articles

- Go to handlebars.js and download the compiler + runtime, place it into the js > vendor folder

## CSS Preprocessors

## Sass, Less and CSS
- These preprocessors will help make CSS easier to structure/maintain/read
- Sass and Less gives us variables, mixins, nested, built in funcitions, conditions and loops
- Install less with ```npm install less --save-dev``` or ```npm install less -g```(globall)
- To run less ```npx lessc <input-less-file.less> <output-css-file.css>```
- npx lessec cmd to build
- input is less file you want converted
- output is the output file that you will link to your CSS
### Variables
- Less File:
````javascript
@danger-color: #bf2020;
a {
  color: @danger-color;
}
````
- After processing:
````javascript
a {
  color: #bf2020;
}
````
### Mixins
- Mixins are properties that can be used in other css properties







