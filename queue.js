const { orderBurger } = require("./counter")
const { doSomethingWhileWaiting, eat, complain, eatBurger } = require('./customerActions')

let queue = ['Beth', 'Romeo', 'Edward', 'Dafe', 'Richard']

async function approachCounter(name){
    try {
        console.log(`A burger, por favor. Name is ${name}`);
        await orderBurger();
        eatBurger(name);
    } catch (err) {
        complain(err, name);
    }
}

for(const customer of queue){
    approachCounter(customer);
    doSomethingWhileWaiting(customer, 'use the loo');
}