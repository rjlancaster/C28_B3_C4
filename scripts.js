
// // Individual arrays holding monthly data for each year
// const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
// const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
// const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
// const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
// const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// // Outer array holding each year's array of data
// const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// // Find out how much total rain has fallen over last 10 years
// let totalRainfall = 0

// // This iterates the outer array
// debugger
// for (let i = 0; i < RainfallDatabase.length; i++) {
//     const yearlyData = RainfallDatabase[i]

//     // This iterates each individual array of numbers
//     for (let j = 0; j < yearlyData.length; j++) {
//         const monthlyData = yearlyData[j]
//         totalRainfall = totalRainfall + monthlyData
//     }
// }

// console.log(totalRainfall)

// const RainfallDatabase = {
//   "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
//   "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
//   "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
//   "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
//   "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
// }

// // Iterate the keys of the object
// for (const year in RainfallDatabase) {
//     // Get current yearly array of rainfall
//     const yearlyData = RainfallDatabase[year]

//     // Reset yearly rainfall total to 0t 
//     let yearlyAmount = 0

//     // Look at each month and add to yearly total
//     for (let i = 0; i < yearlyData.length; i++) {
//         const monthlyData = yearlyData[i]
//         yearlyAmount = yearlyAmount + monthlyData
//     }

//     console.log(`${year} had ${yearlyAmount} inches of rainfall`)
// }



// // create variable that holds number of commits array 
// let totalCommits = 0
// let commitLength = 0

// console.log(Object.keys(githubData[1].payload.commits[5]));


// for (key in githubData) {
//   console.log(`${key}: ${githubData[key]}`)
// }
// // iterate over githubData array
// for (let i=0; i <= githubData.length; i++) {

// // // commits array exists within githubData[i].payload.commits
// commitLength += githubData[i].payload.commits.length  
// // // have commits array length contribute to variable created from line 55

// }

// 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)

// const breed = (type) => {
//   if (type === undefined) {
//     return (`I like cats`);
//   } else {
//     return (`My favorite dog breed is ${type}.`)
//   }
// }

// // 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.

// // 3.Execute the function in a way that captures the returned value in a variable.
// console.log(breed("Labrador"));
// breed();
// // 4.Console.log the string “When it comes to pets,” plus the returned value of the function.

// console.log(`When it comes to pets, ${breed("Boston Terrier")}`);

// const getMyFullName = (first, last) => `${first} ${last}`;

// const sayMyFullname = (firstName, lastName, action) => action(firstName, lastName);

// console.log(sayMyFullname("Richard", "Lancaster", getMyFullName));



// 1.Create a function that creates an object with three properties: name, age, profession. Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.

// const personalInfo = (name, age, profession) => {
//   const personalAry = [name, age, profession];
//   personalObjectMaker(personalAry);
// }

// 2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it.

// const personalObjectMaker = (array) => {
//   let personalObj = {}
//   const properties = ["name", "age", "profession"]
//   properties.forEach((property, index) => {
//     personalObj[property] = array[index]
//   });
//   return console.table(personalObj)
// }

// personalInfo("Daisy", 14, "taker of naps");

// const add = (a, b)=> {
//   return a + b;
// }

// const sub = (a, b) => a - b

// const performAction = (a, b, action) => {
//   return action(a, b)
// }

// const addTest = performAction(5, 7, add);
// const subTest = performAction(5, 7, sub);

// console.log(addTest);
// console.log(subTest)


// 1. Create a function that logs the result of adding two numbers

// const lightningOne = (a, b) => a + b

// // 2. Create a second function called calculate that takes three arguments: two numbers and a function

// let lightningCalc = (c, d, calc) => calc(c, d); 

// // 3. Execute the second function and make it output 5

// console.log(lightningCalc(2, 3, lightningOne));

