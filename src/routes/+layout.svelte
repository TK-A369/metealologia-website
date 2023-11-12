<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	import '../_main.scss';
</script>

<TopAppBar variant="static" color="primary">
	<Row>
		<Section>
			<Title>MeteALOlogia</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton class="material-icons" aria-label="Home" href="/">home</IconButton>
		</Section>
	</Row>
</TopAppBar>
<div>
	<slot />
</div>
