alert('WELCOME TO MY CONVERTER')

alert('Degree Celcius to fahrenheit')
let num1 = prompt("Input your degree celcius;")

function temp() {
    return Number(num1) * 9 / 5 + 32;
}
alert(temp() + 'F')
console.log(temp() + 'F')

// converter
alert('Naira to euro')

let naira1 = prompt("Input your naira;");

let exchangeRate = 0.00055;

function euro() {   
    return Number(exchangeRate) * Number(naira1)
}   
alert(euro() + ' EUR')
console.log(euro() + ' EUR')

// pounds
alert('Naira to pounds')

let naira2 = prompt("Input your naira;");

let exchangeRates = 0.0019;

function pounds() {   
    return Number(exchangeRates) * Number(naira2)
}   
alert(pounds() + ' GBP')
console.log(pounds() + ' GBP')
