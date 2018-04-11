export class Planet {
    constructor({
        id,
        name,
        population,
        climate,
        terrain,
        films
    }) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.climate = climate;
        this.terrain = terrain;
        this.films = films;
    }

    get isValid() {
        const unknown = 'unknown';
        return !(this.population === unknown &&
            (this.climate && this.climate[0]) === unknown &&
            (this.terrain && this.terrain[0]) === unknown &&
            this.films.length === 0)
    }
};