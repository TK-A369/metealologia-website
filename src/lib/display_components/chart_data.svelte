<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';

	import Paper, { Title, Content } from '@smui/paper';

	import Chart from 'chart.js/auto';

	import { t } from '$lib/translations';

	let chartCanvas: HTMLCanvasElement;

	const points: Writable<Array<{ x: number; y: number }>> = writable<
		Array<{ x: number; y: number }>
	>([
		{ x: 0, y: 0 },
		{ x: 5, y: 8 },
		{ x: 10, y: 30 },
		{ x: 15, y: 30 },
		{ x: 20, y: 45 }
	]);

	onMount(() => {
		let ctx = chartCanvas.getContext('2d')!;
		let chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: $points.map((p) => p.x),
				datasets: [
					{
						label: 'Some data',
						data: $points.map((p) => p.y)
					}
				]
			}
		});
		points.subscribe((value) => {
			chart.data.labels = value.map((p) => p.x);
			chart.data.datasets[0].data = value.map((p) => p.y);
			chart.update();
		});

		setInterval(() => {
			let pointsUpdated;
			pointsUpdated = $points;
			console.log(pointsUpdated);
			for (let i = 0; i < pointsUpdated.length; i++) {
				pointsUpdated[i].y = Math.random() * 50;
			}
			points.set(pointsUpdated);
		}, 1000);
	});
</script>

<Paper>
	<Title>{$t('content.data_on_chart')}</Title>
	<Content>
		<div class="chart-container">
			<canvas bind:this={chartCanvas} id="myChart" />
		</div>
	</Content>
</Paper>

<style>
	.chart-container {
		width: 100%;
		height: 250px;
	}
</style>
