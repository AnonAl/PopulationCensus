import {setCountryData} from "../ApiData/getCountryData.js";

async function displayCountryInTable() {

    const countries = await setCountryData();
    const tbody = document.querySelector('.body-of-table');

    for (let i = 0; i < countries.length; i++) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const valuesOfCountryonject = Object.values(countries[i]);
        for (let j = 0; j < valuesOfCountryonject.length; j++) {
            const td = document.createElement('td');
            // console.log(valuesOfCountryonject[j]);
            td.textContent = valuesOfCountryonject[j];
            tr.appendChild(td);
        }
    }
    console.log(countries);
}

displayCountryInTable();
