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
### Mixins
- Mixins are properties that can be used in other css properties

## Modules
- In Javascript ES6+ modules refer to small units of code that can be stored in their own files that are easily readable and understandable. 

- ES6+ modules replaced two older module system in ES5: 
  - CommonJS
  - RequireJS or Asynchronous Module Definition (AMD)
- ES6+ modules, has taken the best parts of CommonJS and RequireJS so that you can just use them in your code.
- Modules help keep us organized
- It will allow us to import parts of code into test modules so we can test code
- There are a couple of different ways to export (expose function to other scripts) in javascript:
  - Named exports (as many as you want per file) you can do this with using “export”.
  - Default export (ONE per file) you can do this with using “export default”.
- Using modules in the browser
  - ```<script type="module" src="lib.mjs"></script>```

## JS Testing with Mocha, Chai, Sinon
- Software is hard, which means bugs happen. We want to minimize this as much as possible as bugs in software can lead to large monetary losses, or losses in human life (like boeing).
- Testing each piece of the software (unit testing each function) to testing the software as whole (functional/end to end tests) gives us software that tests the software we’ve built.
- Having software tests is intertwined with the term “software quality”, basically it’s great to have tests because they can act as a check to make sure you don’t break things and can act as documentation. Other reasons why it’s great:
  - If you make an error that’s going to break the code somewhere else and you run all of your tests that error should show up.
  - You should save time by doing the above and not introducing as many bugs.
  - It makes you think about possible bugs that you’re going to come into.
  - You can build this into a workflow which deploys your code if your tests pass.

### Types of Tests
- Unit Tests
  - This test individual blocks of code, these will make up the majority of tests
- Intergration Tests
  - This will run multiple unit tests together, this is similar to JUnit Suite Test
- Functional Tests
  - A full test of the product itself by using a browser.

### Testing now vs Unit Testing
- One thing to note about unit tests is that we’re not testing anything external to just this unit. In unit tests we **never** touch things that go to a database or over a network, and most time external packages (more on this in the future!)
- We’re going to take a look at unit testing and different ways to test things. To be a little bit more specific we’re going to take a look at:
  - How you’re testing stuff now.
  - Whether you know it or not you’re testing your code.
    Testing After Development (TAD). This is writing your application code and then testing it afterwards.
  - Test Driven Development. This is a method of writing code that sounds simple but it really changes the way that you code. You first write the tests, run them (they should fail first time), then write your application code.
- The difference of TAD and TDD is that TDD you write the test first, then the code, vice versa
- Behaviour Driven Development is a concept that is built upon TDD
- In BDD, we specify tasks such as the Title, Narrative(description of features), Acceptance criteria(description of each specific scenario)







