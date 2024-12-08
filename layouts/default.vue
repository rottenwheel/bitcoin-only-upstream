<template>
	<div class="layout">
		<side-nav
			class="mobile-side-nav"
			:class="{ 'side-nav-open': showMobileSideNav }"
		></side-nav>
		<div class="sidebar-bg"></div>
		<div class="layout-wrapper">
			<mobile-top-nav></mobile-top-nav>
			<side-nav></side-nav>
			<div class="main-content">
				<slot />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "assets/css/layout.scss";
</style>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const showMobileSideNav = useState("showMobileSideNav", () => false);

watch(
	() => route.fullPath,
	() => (showMobileSideNav.value = false)
);
</script>
