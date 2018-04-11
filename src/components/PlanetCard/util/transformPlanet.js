import { ClimateColors } from "./ClimateColors";
import { TerrainGradients } from "./TerrainGradients";

const replaceUnknown = (text) => text.toLowerCase() === 'unknown' ? '?' : text;

export function transformPlanet(planet) {
    const transformed = Object.assign({}, planet);

    transformed.population = replaceUnknown(planet.population)

    transformed.climate = planet.climate.map((climate) => {
        return {
            name: replaceUnknown(climate), // TODO: Transform text
            color: ClimateColors[climate.toLowerCase()]
        }
    });

    transformed.terrain = planet.terrain.map((terrain) => {
        console.log(terrain)
        return {
            name: replaceUnknown(terrain), // TODO: Transform text
            gradient: TerrainGradients.match(terrain.toLowerCase()) // TODO: remove white space
        }
    });

    console.log(transformed);
    return transformed;
}