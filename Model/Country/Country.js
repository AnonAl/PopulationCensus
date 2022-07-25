export class Country {

    economic;
    year;

    constructor(id_nation, nation, id_year, year, population, slug_nation, nameOfCountry, language) {
        this.id_nation = id_nation;
        this.id_year = id_year;
        this.nation = nation;
        this.population = population;
        this.slug_nation = slug_nation;
        this.year = year;
        this.nameOfCountry = nameOfCountry;
        this.language = language;
    }

    get getNameOfCountry() {
        return this.nameOfCountry;
    }

    get getIdNation() {
        return this.id_nation;
    }

    get getLanguage() {
        return this.language;
    }

    get getPopulation() {
        return this.population;
    }

    get getNation() {
        return this.nation;
    }

    get getIdYear() {
        return this.id_year;
    }

    get slugNation() {
        return this.slug_nation;
    }

    get year() {
        return this.year;
    }

    set setEconomic(economic) {
        this.economic = economic;
    }

    get getEconomic() {
        return this.economic;
    }

}

