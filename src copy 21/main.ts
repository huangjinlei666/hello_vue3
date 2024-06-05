import { createApp } from "vue";
import App from './App.vue'

import emitter from "./utils/emitter";
const app= createApp(App)
app.mount("#app")