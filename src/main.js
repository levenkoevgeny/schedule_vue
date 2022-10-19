import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/router"
import "./assets/style.css"
import "./assets/bootstrap_.css"

createApp(App).use(router).mount("#app")
