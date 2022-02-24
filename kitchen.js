let { specialSauce } = require('./pantry');

const makeBurger = (res, rej) => {
    try {
        if(!specialSauce){
            throw new Error("out of special sauce")
        }
        const burger = ['lettuce', 'bun', 'tomato', 'patty', 'special sauce']
        specialSauce--
        setTimeout(() => {
            res(burger)
        }, 5000);
    } catch(err) {
        rej(err.message)
    }
}; // executor function

module.exports = { makeBurger }