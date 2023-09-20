<script>

	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import {PrismicLink} from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="profile-card">
	<section class="leftside">
		<PrismicRichText field={slice.primary.name} />
		<PrismicImage field={slice.primary.logo} />
		<section class="leftside-info-bottom">
			<PrismicRichText field={slice.primary.info_student} />
			<PrismicRichText field={slice.primary.info_opleiding} />
			<PrismicRichText field={slice.primary.email} />
			<section class="leftside-info-bottom-socials">
				<PrismicLink field={slice.primary.github}><PrismicImage field={slice.primary.logo_github} /></PrismicLink>
				<PrismicLink field={slice.primary.linkedin}><PrismicImage field={slice.primary.logo_linkedin} /></PrismicLink>
				<PrismicLink field={slice.primary.instagram}><PrismicImage field={slice.primary.logo_insta} /></PrismicLink>
			</section>
		</section>
	</section>
	<section class="rightside">
		<PrismicImage field={slice.primary.profile_picture} />
	</section>
</section>


<style>
	.profile-card {
		max-width: 600px;
		margin: 6em auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
</style>
