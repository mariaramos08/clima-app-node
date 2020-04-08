const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': '6dadb94b9cmsh63d2fc17442d488p111cffjsn81c1b78fed3b' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}