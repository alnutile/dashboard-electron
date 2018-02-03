import store from "./../store";

import axios from "axios";
const https = require('https');

const site = "https://teamdashboard.site";

export default {
    getQuotes(token) {
        console.log("Get Quote");
        return axios.get(site + "/api/teams/1/quotes/random?api_token=" + token);
    }

}