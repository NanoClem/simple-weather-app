// Demo controller
const welcome = (req, res) => {
    res.send('Welcome on simple weather app !');
}


// EXPORTS
module.exports = {
    welcome: welcome
}