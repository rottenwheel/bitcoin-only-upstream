<template>
	<div class="layout">
		<side-nav
			class="mobile-side-nav"
			:class="{ 'side-nav-open': sideNavOpen }"
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
import { computed } from "vue";
import { useLayoutStore } from "@/stores/layout";

const layoutStore = useLayoutStore();

const sideNavOpen = computed(() => layoutStore.showMobileSideNav);
</script>
