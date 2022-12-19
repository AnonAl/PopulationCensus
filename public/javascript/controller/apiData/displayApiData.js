import {setApiData} from "./setApiData.js";

async function displayCountryData() {

    try {
        const countries = await setApiData();
        const tbody = document.querySelector('.body-of-table');

        for (let i = 0; i < countries.length; i++) {

            const row = document.createElement('tr');
            const dataOfCountry = Object.values(countries[i]);

            tbody.appendChild(row);

            for (let j = 0; j < dataOfCountry.length; j++) {
                const column = document.createElement('td');
                column.textContent = dataOfCountry[j];
                row.appendChild(column);
            }
        }
    } catch (e) {
        console.log(e.message)
    }
}

displayCountryData();
