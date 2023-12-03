<script lang="ts">
	import LatestData from '$lib/display_components/latest_data.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<LatestData stationData={data.stationData} />
