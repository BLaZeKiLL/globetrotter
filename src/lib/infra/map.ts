import { Loader } from '@googlemaps/js-api-loader';

import { PUBLIC_GMAP_API_KEY } from '$env/static/public'

const loader = new Loader({
	apiKey: PUBLIC_GMAP_API_KEY,
	version: 'alpha'
});

export function load_3d_map() {
    return loader.importLibrary('maps3d' as any);
}
