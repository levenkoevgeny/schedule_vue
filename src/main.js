import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/router"
import "./assets/grid.css"
import "./assets/style.css"

createApp(App).use(router).mount("#app")
