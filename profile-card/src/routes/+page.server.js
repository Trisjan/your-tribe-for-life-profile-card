import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';
import { ProgramFiles } from '$env/static/private';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = createClient();

	const page = await client.getByUID('page', 'home');
	console.log("page: ", page)
	console.log("links", page.data.links)
	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url,
		logo_profile: page.data.logo.url,
		github_link: page.data.links[0]?.github.url
	};
}
