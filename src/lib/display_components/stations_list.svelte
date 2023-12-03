<script lang="ts">
	import { setContext } from 'svelte';

	import Paper, { Content, Title } from '@smui/paper';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import Button, { Label } from '@smui/button';

	import { t, l, locales } from '$lib/translations';

	import type { stationData } from '$lib/stations';

	export let stationsData: { [key: string]: stationData };

	setContext('SMUI:list:item:nav', true);
</script>

<Paper>
	<Title>{$t('content.stations')}</Title>
	<Content>
		<div>
			<List>
				{#each Object.entries(stationsData) as [stationId, station]}
					<Item href={`/stations/${stationId}`}>
						<Text>
							<PrimaryText>
								{station.name}
							</PrimaryText>
							<SecondaryText>
								{station.desc}
							</SecondaryText>
						</Text>
					</Item>
				{/each}
			</List>
		</div>
	</Content>
</Paper>
