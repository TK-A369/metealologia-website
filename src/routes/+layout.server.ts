import { redirect } from '@sveltejs/kit';

import { loadTranslations } from '$lib/translations';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	let language = cookies.get('language');
	if (!language) {
		console.log("No language cookie found, setting to pl");
		language = 'pl';
		cookies.set('language', language);
	}

	if (url.searchParams.get('lang_switch') == 'true') {
		switch (language) {
			case 'en':
				language = 'pl';
				break;
			case 'pl':
				language = 'en';
				break;
			default:
				language = 'pl';
				break;
		}
		console.log(`Switching language to ${language}`);
		cookies.set('language', language);
		throw redirect(302, '/');
	}

	await loadTranslations(language);

	return {
		language: language
	};
};
// satisfies PageServerLoad;