import { Gradient } from "../../../model/Gradient/Gradient";
import { Colors } from "../../../theme/Colors";

const rock = new Gradient(Colors.white, Colors.orange)
const water = new Gradient(Colors.white, Colors.blue2)
const grass = new Gradient(Colors.white, Colors.green)
const waterGrass = new Gradient(Colors.blue2, Colors.green)
const toxic = new Gradient(Colors.white, Colors.purple)
const air = new Gradient(Colors.white, Colors.gray6)
const ice = new Gradient(Colors.white, Colors.blue1)
const urban = new Gradient(Colors.white, Colors.gray3)
const lava = new Gradient(Colors.pink, Colors.yellow)
const savanna = new Gradient(Colors.green, Colors.yellow)
const mountain = new Gradient(Colors.green, Colors.orange)
const tundra = new Gradient(Colors.pink, Colors.blue1)
const reef = new Gradient(Colors.purple, Colors.blue1)
const defaultGradient = new Gradient(Colors.white, Colors.gray5)

export const TerrainGradients = {
    match(terrain) {
        if (terrain.match(/lava|volcano/g)) return lava;
        if (terrain.match(/river|ocean|sea|lake/g)) return water;
        if (terrain.match(/jungle|savanna|verdant|vine/g)) return savanna;
        if (terrain.match(/airless|asteroid|gas/g)) return air;
        if (terrain.match(/toxic|acid/g)) return toxic;
        if (terrain.match(/glacier|ice/g)) return ice;
        if (terrain.match(/urban|city|cities|ash/g)) return urban;
        if (terrain.match(/tundra/g)) return tundra;
        if (terrain.match(/reef/g)) return reef;
        if (terrain.match(/rainforest|bog|fungus/g)) return waterGrass;
        if (terrain.match(/plain|forest|hill|plateau|island|valley|grassland|swamp|grass/g)) return grass;
        if (terrain.match(/mountain|cliff/g)) return mountain;
        if (terrain.match(/desert|rock|barren|mesa|scrubland|canyon|sinkhole|cave/g)) return rock;
        return defaultGradient;
    }
}