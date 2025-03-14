// code your solution here
// Function Declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // IIFE Example
  (function () {
    console.log("This is an IIFE!");
  })();
  
  // Closure Example
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  
  // wrapAdjective Function
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example Usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"