// Demo controller
const welcome = (req, res) => {
    res.send({message: 'Welcome on simple weather app !'});
}


// EXPORTS
module.exports = {
    welcome: welcome
}