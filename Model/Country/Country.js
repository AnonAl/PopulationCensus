class Country {
    nameOfCountry;
    nation;
    year;
    language;
    economic;

    constructor(nameOfCountry, nation, language) {
        this.nameOfCountry = nameOfCountry;
        this.nation = nation;
        this.language = language;
    }

    get getNameOfCountry() {
        return this.nameOfCountry;
    }

    get getNation() {
        return this.nation;
    }

    get getLanguage() {
        return this.language;
    }

    set setYear(year) {
        this.year = year;
    }

    get getYear() {
        return this.year;
    }

    set setEconomic(economic) {
        this.economic = economic;
    }

    get getEconomic() {
        return this.economic;
    }

}
