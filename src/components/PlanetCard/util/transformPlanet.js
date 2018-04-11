import { ClimateColors } from "./ClimateColors";
import { TerrainGradients } from "./TerrainGradients";

export function transformPlanet(planet) {
    const transformed = Object.assign({}, planet);
    
    transformed.climate = planet.climate.map((climate) => {
        return {
            name: climate, // TODO: Transform text
            color: ClimateColors[climate.toLowerCase()]
        }
    });
    
    transformed.terrain = planet.terrain.map((terrain) => {
        console.log(terrain)
        return {
            name: terrain, // TODO: Transform text
            gradient: TerrainGradients.match(terrain.toLowerCase()) // TODO: remove white space
        }
    });

    console.log(transformed);
    return transformed;
}