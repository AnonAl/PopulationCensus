export function cacheData(countries) {
    let cache = new Map();
    if (countries.size) {
        return cache;
    } else {
        for (let i = 0; i < countries.length; i++) {
            cache.set(i, countries[i]);
        }
        return cache;
    }

}
