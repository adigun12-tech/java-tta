// Assignment (BMI) building a BMI calculator    
        // 1. welcome
        // 2. ask for my name
        // 3. output welcome henry
        // 4. get my height
        // 5. get my weight
        // convert weight kg to g
        // 6. double my height
        // 7. output my BMI index
        // 8. thanks for using me
        //  formula mh2 
// hint
    // -Arithmetic
    // -Concantation


alert("welcome")

let Name = prompt("Enter your FullName")
    
let outputs = 'Welcome to your BMI calculator dear ' + Name 
    
let h = prompt("What is your height")
    
// let he = h
    
let w = prompt("What is your weight")
    
let we = w * 1000
    
let mx = h ** 2
    
let result = mx * we
    
let BMI =  'Dear ' + Name + ' Your BMI is ' + result
    
let o = 'Dear ' + Name + ' kindly refresh for another trial'

alert(  BMI + 'kg/m2')
    
alert('THANKS FOR USING ME ' + Name)
    
console.log(outputs)
console.log( 'Your height is ' + h + 'cm')
console.log( 'Your weight in gram is '+ we  + 'g')
console.log(BMI + 'kg/m2')
console.log(o)