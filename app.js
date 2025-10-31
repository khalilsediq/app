let result = document.querySelector("#result");

function onResult(){
    let array = ["Khalil, wali, rafi"];
    array.push("Subhan");
    result.innerHTML = array;
    console.log(array);
}

function onResult(){
let fruits = ["banana, Manngo, Water-Melon", "pomegranate", "Apple", "Guava"];
fruits.pop();
result.innerHTML = fruits;
console.log(fruits);
// result.innerHTML = ""
}

function onResult(){
    let days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    days.unshift("Monday")
result.innerHTML = days;
console.log(days);
}

function onResult(){
let colors = ['red', 'green', 'orange', 'teal', 'blue', 'purple'];
colors.shift();
result.innerHTML = colors;
console.log(colors);
}