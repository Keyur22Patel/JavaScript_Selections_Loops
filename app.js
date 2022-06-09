

// Exercise 1 Section

/*for (let i = 1; i <= 100; i++)
{
    if (i === 0 ){
 console.log(i + " is even");
}
else if (i % 2 === 0) {
    console.log(i + " is even"); }

else {
    console.log(i + " do nothing ");
}
}
// Exercise 2 Section
for (let i = 1; i <= 100; i++)
{
    if ( i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz"); }
      
      else if ( i % 3 === 0) {
        console.log("Fizz"); }
     
      else if ( i % 5 === 0) {
          console.log("Buzz"); }
      else {
        console.log(i);
      }
    } 
// Exercise 3 Section

let i = 1;
while (i < 100){
    if (i % 2 !== 0)
    console.log(i);
 }
 i++;
 do {
    if (i % 2 !== 0){
    console.log(x);
 }
 x++;
 } while (x < 100);


// Exercise 4 Section
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 1; i <= n; i++) {
    
   if (i === value) {
    console.log(`Found ${value}!`);
    break;
}
if (i == n){
console.log(`Do not find ${value} within 1-${n}..`);
}
}*/
// Exercise 5 Section 
let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start ,end);
for (let i = start; i <= end; i++){
    let output= "";

    if (i % fizzDivisor == 0){
        output += "FIZZ";
     }
     if (i % buzzDivisor == 0){
        output += "BUZZ";
     }
    console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);
