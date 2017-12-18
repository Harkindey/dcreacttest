import axios from 'axios';

const API_KEY = 'd7234a3ae775d794f90889889bd0a2d4';
const LOCATION_ID = '2332453';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
export default {
    getWeatherInfo: units => {
        return axios
            .get(`${URL}?id=${LOCATION_ID}&APPID=${API_KEY}&units=${units}`)
            .then(function(info) {
                return info.data;
            })
            .catch(err => {
                console.log(err);
            });
    }
};