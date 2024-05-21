import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
// Replace with your actual Client ID
const yourClientId =
  "428457114161-79bas0nrjdb6a6dp4f8s7lksgqj03jg6.apps.googleusercontent.com";
const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId: yourClientId,
});
app.use(router);

app.mount("#app");
