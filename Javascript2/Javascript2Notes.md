#Javascript 2

## Review
- ```let``` and ```const``` are local to the block that they are defined in
- ```var``` are also local to the block that they are defined in OR global scope

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

