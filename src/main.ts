import { createApp } from 'vue'
import App from './App.vue'

import * as Icons from "@element-plus/icons-vue";
import type { Directive } from 'vue';
// import * as directives from "@/directives"
// import "@/utils/polyfill";

import '@/assets/css/index.less'
import '@/assets/css/tailwindcss.less'
import '@/assets/css/element-cover.less'

const app = createApp(App);
console.log("Icons", Icons);
//注册icons全局组件
Object.keys(Icons).forEach ((key) => {
    app.component(key, Icons[key]);
})

createApp(App).mount('#app')
