import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const axios = require("axios");

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest) {
    const lat = req.query.lat;
    const long = req.query.long;
    const appId = "870fdc992bf1fbdda05fbb6151503cc2";
    const url = "http://api.openweathermap.org/data/2.5/weather?APPID=" + appId +
        "&units=imperial&lat=" + lat + "&lon=" + long;

    let response = await axios.get(url);
    return {
        body: response.data
    };
};

export default httpTrigger;
