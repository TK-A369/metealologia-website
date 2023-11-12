import { loadTranslations } from '$lib/translations';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	await loadTranslations(data.language);

	return {};
};