import * as fs from 'fs/promises';

(async () => {
    const raw_geo_json = JSON.parse(await fs.readFile('./geo/data/raw/nyc.geojson'));

    const new_geo_json = {
        'points': raw_geo_json.features.map(x => x.geometry.coordinates)
    }

    await fs.writeFile('./src/geo/nyc.json', JSON.stringify(new_geo_json));
})();