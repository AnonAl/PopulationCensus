import {getData} from '../apiData/getData.js';

export async function parseApiData() {
    try {
        const dataOfCountries = [];

        const dataUSA = await getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await Object.values(dataUSA)[0];
        await data.forEach(objectCountry => {
            Object.values(objectCountry)
                .forEach(dataOfCountry => {
                    dataOfCountries.push(dataOfCountry);
                })
        });
        return dataOfCountries;
    } catch (e) {
        console.log(e.message);
    }

}
