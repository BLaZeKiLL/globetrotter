import { Loader } from '@googlemaps/js-api-loader';

import { PUBLIC_GMAP_API_KEY } from '$env/static/public';

import _nyc_json from '../../geo/nyc.json';

const loader = new Loader({
	apiKey: PUBLIC_GMAP_API_KEY,
	version: 'alpha'
});

/**
 * {
		center: {lat: 37.7438, lng: -121.5088, altitude: 1800},
		heading: -90,
		tilt: 90,
		defaultLabelsDisabled: false,
	}
 */
export interface Map3DOptions {
	center: { lat: Number; lng: Number; altitude: Number };
	heading?: Number;
	tilt?: Number;
	defaultLabelsDisabled?: false;
}

export function load_3d_map() {
	return loader.importLibrary('maps3d' as any);
}

export function initialize_3d_map(options: Map3DOptions) {
	load_3d_map().then(async (lib) => {
		const { Map3DElement, Marker3DElement, Model3DElement } = lib as any;
		const { PinElement } = await google.maps.importLibrary('marker') as any;

		const map = new Map3DElement(options);

		_nyc_json.points.forEach(point => {
			const pinBackground = new PinElement({
				background: '#FBBC04',
			});

			const marker = new Marker3DElement({
				position: { lat: point[1], lng: point[0] }
			});

			marker.append(pinBackground);
	
			map.append(marker);
		});

		document.getElementById('main-map')?.appendChild(map);
	});
}
