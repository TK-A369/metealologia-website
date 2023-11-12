import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import stations from '$lib/stations';

export const load: PageServerLoad = async ({ params }) => {
	console.log(`Station ${params.stationId} is being requested`);
	const station = stations[params.stationId];

	if (station) {
		return station;
	}

	throw error(404, 'Not found');
};