import {setApiData} from "./setApiData.js";

async function displayCountryData() {

    try {
        const countries = await setApiData();
        const tbody = document.querySelector('.body-of-table');

        for (let i = 0; i < countries.length; i++) {
            const row = document.createElement('tr');
            tbody.appendChild(row);
            const dataOfCountry = Object.values(countries[i]);
            for (let j = 0; j < dataOfCountry.length; j++) {
                const column = document.createElement('td');
                // console.log(valuesOfCountryObject[j]);
                // console.log(typeof valuesOfCountryObject[j]);
                column.textContent = dataOfCountry[j];
                row.appendChild(column);
            }
        }
        console.log(countries);
    } catch (e) {
        console.log(e.message)
    }
}

displayCountryData();
