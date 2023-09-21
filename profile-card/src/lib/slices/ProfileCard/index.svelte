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
		<h1 class="leftside-top">
			<PrismicRichText field={slice.primary.name} />
		</h1>
		<section class="leftside-middle">
			<PrismicImage field={slice.primary.logo} class="logo" />
		</section>
		<section class="leftside-bottom">
			<PrismicRichText field={slice.primary.info_student} />
			<PrismicRichText field={slice.primary.info_opleiding} />
			<PrismicRichText field={slice.primary.email} />
			<section class="leftside-bottom-socials">
				<PrismicLink field={slice.primary.github}><PrismicImage field={slice.primary.logo_github} /></PrismicLink>
				<PrismicLink field={slice.primary.linkedin}><PrismicImage field={slice.primary.logo_linkedin} /></PrismicLink>
				<PrismicLink field={slice.primary.instagram}><PrismicImage field={slice.primary.logo_insta} /></PrismicLink>
			</section>
		</section>
	</section>
	<section class="rightside">
		<PrismicImage field={slice.primary.profile_picture} class="profilepicture"/>
	</section>
</section>


<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');

	.profile-card {
		display: flex;
		max-width: 100%;
		max-height: 100%;
		font-family: 'DM Serif Text', serif;
		color: #395259;
		width: 832px;
		height: 600px;
		left: 50vw;
		filter: drop-shadow(2px 2px 8px #000000);
	}

	h1 {
		font-size: 40px;
		font-weight: 500;
		margin: 0;
		padding: 0;
	}

	.leftside {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		background-color: #FFFFFF;
		width: 366px;
		height: 600px;
		padding: 0 25px;
	}
	
	.leftside-top {
		grid-area: 1 / 1 / 2 / 2;
	}

	.leftside-middle {
		grid-area: 2 / 2 / 3 / 3;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.leftside-bottom {
		grid-area: 3 / 3 / 4 / 4;
		text-align: right;
	}

	.rightside {
		max-width: 100%;
		background-color: #D2B396;
		width: 416px;
		height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 55rem) {
		.profile-card {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-height: 100%;
		}

		.leftside {
			height: 400px;
		}

		.rightside {
			height: 400px;
		}

		h1	{
			font-size: 30px;
		}

		.leftside-bottom {
			font-size: 12px;
		}
	}

</style>
