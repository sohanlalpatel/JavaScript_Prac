// Array 
// Types of Array
const myarr = [0,1,2,3,4,5];
const courses = ["JAVA", "C++", "JavaScript"];

const myarr2 = new Array(2,3,4,5,6);


console.log(myarr2);
console.log("First Array "+myarr);
console.log(courses);

// push or pop
myarr.push(8);
courses.push("newcourse");

myarr.pop();
console.log(myarr);
console.log(courses);

// shift and unshift
myarr2.unshift(0);

console.log("Second Array " +myarr2);

myarr.shift();
console.log(typeof myarr);

 // join
 
 const newarr = myarr.join();

 console.log(newarr);
 console.log(typeof newarr);
 
 // slice and splice

 const myn1 = myarr.slice(1,3);
console.log("----------------slice and splice -------------- ");

 console.log(myn1)

console.log("B", myarr);