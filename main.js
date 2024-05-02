'use strict'

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

const ul = document.querySelector("ul.list");

    //for (let index = 0; index < 101; index++) {
    //const ul = document.querySelector("ul.list");
    //const element = `<li class="box box--${index}">${index}</li>`;
    //ul.innerHTML += element;
    //} 

for (let index = 1; index < 101; index++) {
    const li = document.createElement('li');
   
    ul.append(li);
    
    if (index % 15 === 0) li.append("FizzBuzz");
    else if (index % 3 === 0) li.append("Fizz");
    else if (index % 5 === 0) li.append("Buzz");
    else  li.append(index);
}