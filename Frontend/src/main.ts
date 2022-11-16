import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import App from "./App.vue";
import router from "./router/index";
import globalComponents from "./global-components";
import utils from "./utils/index";
import "./assets/css/app.css";

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(router)
app.use(pinia)
globalComponents(app);
utils(app);

app.mount("#app");
