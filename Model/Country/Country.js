import { getData } from '../../Model/Data/getData.js'
class Country {
    nameOfCountry;
    id_nation;
    id_year;
    nation;
    population;
    slug_nation;
    year;
    language;
    economic;

    constructor(id_nation, id_year, nation, population, slug_nation, year, nameOfCountry, language) {
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

    getCountry() {
        getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(obj => Object.values(obj)
                .forEach(data => {
                    console.log(data);
                    Object.values(data)
                        .forEach(country => Object.keys(country)
                            .forEach(popOfCountry => console.log('Key: ' + popOfCountry + '\n' + 'Value: ' + country[popOfCountry])))})
            ).catch(err => console.log(err.message));
    }

}
new Country().getCountry();
