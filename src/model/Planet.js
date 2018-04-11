export class Planet {
    constructor({
        name,
        population,
        climate,
        terrain,
        films
    }) {
        this.name = name;
        this.population = population;
        this.climate = climate;
        this.terrain = terrain;
        this.films = films;
    }

    get isValid() {
        const unknown = 'unknown';
        return this.population !== unknown &&
            this.climate !== unknown &&
            this.terrain !== unknown &&
            this.films !== unknown
    }
};