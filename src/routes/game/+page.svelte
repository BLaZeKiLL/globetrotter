<script lang="ts">
	import { initialize_3d_map } from '$lib';

	/**
	 * $effect runs after the component has been mounted
	 * not using this may cause the google map lib to be
	 * at the server using SSR mode where window is not
	 * defined
	 */
	$effect(() =>
		initialize_3d_map({
			center: {
				lat: 40.6914,
				lng: -74.0160,
				altitude: 600
			},
			heading: 15,
			tilt: 75
		})
	);
</script>

<!-- Grid Column, md will be used on desktops -->
<div class="grid h-screen grid-cols-1 md:grid-cols-[1fr_6fr_1fr]">
	<!-- Sidebar (Left) -->
	<aside class="p-4">Players</aside>
	<!-- Main -->
	<main class="h-full">
		<div class="h-full" id="main-map"></div>
	</main>
	<!-- Sidebar (Right) -->
	<aside class="p-4">Dr.Globetrotter</aside>
</div>
