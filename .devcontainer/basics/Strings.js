// to convert any string to substring 
const name = "HariOm"
const repcount = 5;

// console.log(name + " "+ repcount + " bahut hai"); //but this is not gud sturctured avoid this instead of using this go with 

console.log(`Hello i am ${name} and i have ${repcount} in the github`);

// here is one more method to show the string 

const gameName = new String("Berlin")
// console.log(gameName);

/** there are many prototype/ methods are available in String which can we use to solve some string problems very easy it can help to make things easy   */
// here the list of those methods
/**
 indexof
 charAt
 substring 
 sliceof
 trim
 length
 toUpperCase
 replace
 includes
 */

 const newString = gameName.substring(0, 4);
//  console.log(newString);

 const anotherString = "    Berlin   "
//  console.log(anotherString.trim());

const email = "https:berlin/berlin%20gaming"
// console.log(email.replace('%20', '-'))

console.log(email.includes('berlin'));