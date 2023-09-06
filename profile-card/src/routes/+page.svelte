<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SliceZone slices={data.page.data.slices} {components} />

<h1>{data.meta_title}</h1>

<img src="{data.logo_profile}" alt="image">

<h1>{data.github_link}</h1>