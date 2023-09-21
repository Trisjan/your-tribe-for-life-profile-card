import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';
import { ProgramFiles } from '$env/static/private';

export const prerender = 'auto';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = createClient();

	const page = await client.getByUID('page', 'home');
	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title
	};
}
