export const getData = async url => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
};

