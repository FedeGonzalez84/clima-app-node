const axios = require('axios');

const getClima = async(lat, lng) => {

    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7194709688c34f7b573d352722a997d1`);

    return res.data.main.temp;
};

module.exports = {
    getClima
}