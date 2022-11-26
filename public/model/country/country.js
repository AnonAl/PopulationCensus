export class Country {

    constructor(economic, id_nation, nation, id_year, year, population, slug_nation, nameOfCountry, language) {
        this._economic = economic;
        this._id_nation = id_nation;
        this._id_year = id_year;
        this._nation = nation;
        this._population = population;
        this._slug_nation = slug_nation;
        this._year = year;
        this._nameOfCountry = nameOfCountry;
        this._language = language;
    }

    get language() {
        return this._language;
    }
    get nameOfCountry() {
        return this._nameOfCountry;
    }
    get year() {
        return this._year;
    }
    get slug_nation() {
        return this._slug_nation;
    }
    get population() {
        return this._population;
    }
    get nation() {
        return this._nation;
    }
    get id_year() {
        return this._id_year;
    }
    get id_nation() {
        return this._id_nation;
    }
    get economic() {
        return this._economic;
    }


}

