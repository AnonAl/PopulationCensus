import {Country} from '/../../public/model/country/country.js';
import {parseApiData} from "./parseApiData.js";

export async function setApiData() {
    try {
        let counter = 6;
        const obj = [];
        const listOfCountries = [];

        const dataOfCountries = await parseApiData();

        for (let i = 0; i < dataOfCountries.length; i += 6) {
            dataOfCountries.slice(i, counter + i).forEach(value => obj.push(value));
            listOfCountries.push(new Country("5% grow", ...obj, "USA", "English"));
            obj.splice(0, counter);
        }
        return listOfCountries;
    } catch (e) {
        console.log(e.message)
    }

}
