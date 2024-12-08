import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () => {
	const showMobileSideNav = ref(false);

	return { showMobileSideNav };
});
