
const doSomethingWhileWaiting = (thing, name) => {
    console.log(`${name} is just going to ${thing} while they wait...`)
};
const eatBurger = (name) => { 
    console.log(`Eating burger, yum! I am one happy ${name}`) 
}; // on fulfillment of promise
const complain = (name, excuse) => {
    console.log(`It\'s not my fault that you\'re ${excuse}! Please lodge a complaint in my name which is ${name}`);
}; // on failure/rejection of promise

module.exports = { doSomethingWhileWaiting, eatBurger, complain }