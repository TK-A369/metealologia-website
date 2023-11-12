<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import { t, l, locales } from '$lib/translations';
</script>

<Paper>
	<Title>{$t('content.latest_measurements')}</Title>
	<Content>
		{$t('content.temperature')}: 20°C <br />

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero leo, vehicula finibus
			orci ut, tempus dapibus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Pellentesque elementum vel orci ut mollis. Fusce ut sapien tempor, rhoncus nisl eget,
			hendrerit nisl. Aliquam rutrum commodo arcu nec iaculis. Proin sollicitudin, lorem nec luctus
			interdum, orci ex ornare quam, sed sollicitudin leo risus a odio. Vestibulum ligula quam,
			aliquet at nisi quis, volutpat luctus felis.
		</p>
	</Content>
</Paper>
