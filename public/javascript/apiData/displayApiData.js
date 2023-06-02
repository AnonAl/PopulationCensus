import {setApiData} from "./setApiData.js";

async function displayCountryData() {
    try {
        const tbody = document.querySelector(".body-of-table");

        const countries = await setApiData();

        if (countries.size) {
            for (let country of countries.values()) {
               // console.log(country);
                const row = document.createElement("tr");
                const dataOfCountry = Object.values(country);

                tbody.appendChild(row);

                for (let j = 0; j < dataOfCountry.length; j++) {
                    const column = document.createElement("td");
                    column.textContent = dataOfCountry[j];
                    row.appendChild(column);
                }
                /*console.log(dataOfCountry);*/
            }
        } else {
            alert('Data hasn\'t come! +\n Check the Internet connection');
        }
    } catch (e) {
        console.log(e.message);
    }
}

displayCountryData();
