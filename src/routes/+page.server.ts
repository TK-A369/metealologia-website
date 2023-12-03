import type { PageServerLoad } from './$types';

import stations from '$lib/stations';

export const load: PageServerLoad = async () => {
	return { stations: stations };
};