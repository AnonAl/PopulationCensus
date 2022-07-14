export const getData = async url => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
};

getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(obj => Object.values(obj)
        .forEach(data => {
            console.log(data);
            Object.values(data)
            .forEach(country => Object.keys(country)
                .forEach(popOfCountry => console.log('Key: ' + popOfCountry + '\n' + 'Value: ' + country[popOfCountry])))})
    ).catch(err => console.log(err.message));

