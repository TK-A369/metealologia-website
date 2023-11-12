<script lang="ts">
	import Paper, { Content } from '@smui/paper';

	import { Html, LayerCake, ScaledSvg } from 'layercake';
	import Line from '$lib/chart_components/Line.svelte';
	import AxisX from '$lib/chart_components/AxisX.html.svelte';
	import AxisY from '$lib/chart_components/AxisY.html.svelte';

	const points = [
		{ x: 0, y: 0 },
		{ x: 5, y: 8 },
		{ x: 10, y: 30 },
		{ x: 15, y: 30 },
		{ x: 20, y: 45 }
	];
</script>

<Paper>
	<Content>
		<div class="chart-container">
			<LayerCake ssr={true} percentRange={true} x="x" y="y" data={points}>
				<Html>
					<AxisX />
					<AxisY xTick={-4} yTick={2} ticks={8} />
				</Html>
				<ScaledSvg>
					<Line stroke="#44ff44" />
				</ScaledSvg>
			</LayerCake>
		</div>
	</Content>
</Paper>

<style>
	.chart-container {
		width: 100%;
		height: 250px;
	}
</style>
