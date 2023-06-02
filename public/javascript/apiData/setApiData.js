import { Country } from "../../../public/model/country/country.js";
import { parseApiData } from "./parseApiData.js";
import {cacheData} from "./cache.js";

export async function setApiData () {
    try {
        const counter = 6;
        const obj = [];
        const listOfCountries = [];

        const dataOfCountries = await parseApiData();

        // console.log(dataOfCountries);
        for (let i = 0; i < dataOfCountries.length; i += 6) {
            dataOfCountries.slice(i, counter + i).forEach(value => obj.push(value));
            listOfCountries.push(new Country("5% grow", ...obj, "USA", "English"));
            obj.length = 0;
            // console.log(obj.length);
            //splice(0, counter);
        }
        return cacheData(listOfCountries);
    } catch (e) {
        console.log(e.message);
    }
}
