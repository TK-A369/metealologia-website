<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	import '../_main.scss';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<TopAppBar variant="static" color="primary">
	<Row>
		<Section>
			<Title>MeteALOlogia</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton class="material-icons" aria-label="Home" href="/">home</IconButton>
			<IconButton
				data-sveltekit-preload-data="off"
				data-sveltekit-reload
				class="material-icons"
				aria-label="Switch language"
				href="?lang_switch=true">language</IconButton
			>
		</Section>
	</Row>
</TopAppBar>
<div>
	<slot />
</div>
