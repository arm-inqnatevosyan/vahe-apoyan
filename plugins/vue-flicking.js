import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking.css";
import {Pagination} from "@egjs/flicking-plugins";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('flicking', Flicking)
    nuxtApp.vueApp.directive('pagination', Pagination)
});

