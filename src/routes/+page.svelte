<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import { t, l, locales } from '$lib/translations';
</script>

<Paper>
	<Title>{$t('content.title')}</Title>
	<Content>
		{$t('content.info')}
	</Content>
</Paper>
