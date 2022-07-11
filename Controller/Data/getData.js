const getData = async url => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
};
getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(res => {
        // console.log(res);
        let data = Object.keys(res);
        let data1 = Object.keys(data[0]);
        // data1.forEach((el,key) => console.log(el + ' ' + key))
    });
export default getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
