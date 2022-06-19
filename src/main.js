import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/tailwind.css";
import "./components/components-defination";

Vue.config.productionTip = false;
Vue.mixin({
    data() {
        return {
            smCol: [
                "tw-w-full  xs:tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4  mb-3 tw-px-2",
            ],
            medCol: ["tw-w-full  md:tw-w-1/2 tw-mb-3 tw-px-2"],
            fullCol: ["tw-w-full tw-mb-3 tw-px-2"],
            fullRow: ["tw-w-full tw-flex tw-flex-wrap"],
        };
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
