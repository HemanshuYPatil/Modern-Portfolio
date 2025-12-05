<script lang="ts">
	import { onMount } from 'svelte';
	import { renderStudio } from 'sanity';
	import config from '$lib/sanity.config';

	onMount(() => {
		renderStudio(document.getElementById('sanity'), config);
	});
</script>

<div id="sanity"></div>

<style global>
	#sanity {
		height: 100vh;
		max-height: 100dvh;
		overscroll-behavior: none;
		-webkit-font-smoothing: antialiased;
		overflow: auto;
	}
</style>
