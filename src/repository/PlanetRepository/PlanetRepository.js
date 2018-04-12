import { Planet } from "../../model/Planet/Planet";

class _PlanetRepository {
    constructor() {
        this.planetCount = 0;
        this.randomIndexes = [];
    }

    _randomize() {
        console.log('randomize. planet count = ' + this.planetCount);
        // Create an array with [this.planetCount] size
        this.randomIndexes = new Array(this.planetCount);

        // Fill the array from 1 to [this.planetCount], since the first API id  is 1 and not 0
        for (let i = 0; i < this.planetCount; i += 1) {
            this.randomIndexes[i] = i + 1;
        }

        // Randomize the array
        for (let i = 0; i < this.planetCount; i += 1) {
            const randomIndex = Math.floor(Math.random() * this.planetCount);
            const aux = this.randomIndexes[i];

            // Swap items
            this.randomIndexes[i] = this.randomIndexes[randomIndex];
            this.randomIndexes[randomIndex] = aux;
        }
    }

    isLoaded () {
        return this.planetCount !== 0;
    }

    _fetchCount () {
        return fetch('https://swapi.co/api/planets')
            // .then(() => {throw new Error('Fetch error')})
            .then(results => results.json())
            .then(response => this.planetCount = response.count);
    }

    reload () {
        console.log('reload');
        if (this.isLoaded()) {
            console.log('is loaded')
            this._randomize();
            return new Promise((resolve, reject) => resolve());
        }
        console.log('is Not loaded')
        return this._fetchCount().then(() => this._randomize());
    }

    hasRandomPlanet () {
        return this.randomIndexes.length !== 0
    }

    getRandomPlanet () {
        if (!this.isLoaded()) throw new Error('There was an error on the initialization. Call "reload" to reload the planets');

        const randomIndex = this.randomIndexes.pop();
        if (randomIndex === undefined) throw new Error('No planets left');

        return fetch(`https://swapi.co/api/planets/${randomIndex}`)
            // .then((results) => {
            //     if (Math.random() > 0.8) throw new Error('Fetch error')
            //     return results;
            // })
            .then(results => results.json())
            .then(response => new Planet({
                id: randomIndex,
                name: response.name,
                climate: response.climate.split(',').map(climate => climate.trim()),
                terrain: response.terrain.split(',').map(terrain => terrain.trim()),
                films: response.films,
                population: response.population
            }));
    }
}

// Makes a Singleton
export const PlanetRepository = new _PlanetRepository();