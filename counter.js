const { makeBurger } = require('./kitchen');

const orderBurger = () => new Promise(makeBurger); // Promise is made here

module.exports = { orderBurger }