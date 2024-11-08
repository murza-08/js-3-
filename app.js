//SPREAD

// const arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr);



// const arr2 = [...arr2];

// console.log(arr2);




// 2
// REST

// function sum(name, age) {
//     console.log(`my name is $()`);
//     asdfgh
// }






// const info = ["name", "my", "tilek", "is", 45, {hobby: "swim"}];


// console.log(info);



// const [a, b, c, d, e, {hobby} ] = info;

// console.log(a, b, c, d, e, hobby );



// const person = {
//     name: "Анна",
//     age: 28,
//     city: "Киев",
//     profession: "Учител",
//     family: ["maks", "Eldiar", "Aidana", { old: 35  }],
// };


const person = { 
    name: 'Anna', 
    age: 28, 
city:'kiev', 
profession: 'учитель', 
famely:['maks', 'eldiar', 'aidana', {old:35}], 
} 
console.log(person); 
 
const {name, age, city, profession, famely:[a,b,c,{old}] } = person 
console.log(name, profession, city, age,  a, b, c, old );

