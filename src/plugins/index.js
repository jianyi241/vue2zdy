import Vue from "vue";

import LoadingPlugin from "./loading";
import toastPlugin from "./toast";
Vue.use(LoadingPlugin);
Vue.use(toastPlugin,{plugins: 'toast'});
