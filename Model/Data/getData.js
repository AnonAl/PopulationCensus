export const getData = async url => {
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json;
    }
    catch (e) {
        console.log(e.message);
    }
};

