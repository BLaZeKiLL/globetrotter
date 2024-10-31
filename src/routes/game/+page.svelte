<script lang="ts">
	import { load_3d_map } from "$lib";

	/**
	 * $effect runs after the component has been mounted
	 * not using this may cause the google map lib to be
	 * at the server using SSR mode where window is not
	 * defined
	*/
	$effect(() => {
		load_3d_map().then(lib => {
			const { Map3DElement, Model3DElement } = lib as any;

			const map = new Map3DElement({
				center: {lat: 37.7438, lng: -121.5088, altitude: 1800},
				heading: -90,
				tilt: 90,
				defaultLabelsDisabled: false,
			});

			document.getElementById('main-map')?.appendChild(map);
		});
	});
</script>

<!-- Grid Column, md will be used on desktops -->
<div class="h-screen grid grid-cols-1 md:grid-cols-[1fr_6fr_1fr]">
	<!-- Sidebar (Left) -->
	<aside class="p-4">
        Players
    </aside>
	<!-- Main -->
	<main class="h-full">
		<div class="h-full" id="main-map">

		</div>
	</main>
	<!-- Sidebar (Right) -->
	<aside class="p-4">
        Dr.Globetrotter
    </aside>
</div>
