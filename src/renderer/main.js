import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";
import db from "./datastore"
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";
import swal from 'sweetalert2';

Vue.component("settings", require("./components/Settings"));
Vue.component("quotes", require("./components/Quotes"));

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$db = db;
Vue.prototype.$alert = swal;
Vue.prototype.$store = store;
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
