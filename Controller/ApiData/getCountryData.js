import {getData} from '/../../Model/Data/getData.js';
import {Country} from '/../../Model/Country/Country.js';

async function getCountryData() {
    try {

        // mapOfCountries = new Map();

        const arrObjCountries = [];
        const dataOfCountries = [];

        const dataUSA = await getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = Object.values(dataUSA);
        const dataObj = data[0];
        dataObj.forEach(country => arrObjCountries.push(country));
        // console.log(dataObj);
        arrObjCountries.forEach(objCountry => Object.values(objCountry)
            .forEach(dataOfCountry => dataOfCountries.push(dataOfCountry)));
        // console.log(this.dataOfCountries)
        // this.arrObjCountries.forEach(objCountry => Object.keys(objCountry)
        //     .forEach(dataOfCountry => this.mapOfCountries.set(dataOfCountry, objCountry[dataOfCountry])));
        // console.log(this.mapOfCountries);
        return dataOfCountries;
    } catch (e) {
        console.log(e.message);
    }

}

export async function setCountryData() {
    try {
        let counter = 6;
        const obj = [];
        const listOfCountries = [];

        const dataOfCountries = await getCountryData();

        for (let i = 0; i < dataOfCountries.length; i += 6) {
            dataOfCountries.slice(i, counter + i).forEach(value => obj.push(value));
            listOfCountries.push(new Country(...obj, "USA", "English"));
            obj.splice(0, counter);
        }
        return listOfCountries;
    } catch (e) {
        console.log(e.message)
    }

}

async function show() {
    (await setCountryData()).forEach(value => console.log(value));
}

// show();
