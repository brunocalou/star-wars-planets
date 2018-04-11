import { Planet } from './Planet';

describe('isValid', () => {
    it('Should return true for a valid planet', () => {
        const planet = new Planet({
            name: 'name',
            population: 'unknown',
            climate: [],
            terrain: [],
            films: []
        });

        expect(planet.isValid).toBeTruthy()
    })

    it('Should return false for an invalid planet', () => {
        const planet = new Planet({
            name: 'name',
            population: 'unknown',
            climate: ['unknown'],
            terrain: ['unknown'],
            films: []
        })

        expect(planet.isValid).toBeFalsy()
    })
})