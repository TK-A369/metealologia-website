<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	import LatestData from '$lib/display_components/latest_data.svelte';
	import ChartData from '$lib/display_components/chart_data.svelte';

	import { t, l, locales } from '$lib/translations';
</script>

<LayoutGrid>
	<Cell span={12}>
		<Paper>
			<Title>{$t('content.title')}</Title>
			<Content>
				{$t('content.info')}
			</Content>
		</Paper>
	</Cell>
	<Cell span={6}>
		<LatestData />
	</Cell>
	<Cell span={6}>
		<ChartData />
	</Cell>
	<Cell span={3}>
		<Paper>
			<Title>Moderately important weather data...</Title>
		</Paper>
	</Cell>
	<Cell span={3}>
		<Paper>
			<Title>Moderately important weather data...</Title>
		</Paper>
	</Cell>
	<Cell span={6}>
		<Paper>
			<Title>Some important weather data...</Title>
		</Paper>
	</Cell>
</LayoutGrid>
