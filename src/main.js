import Vue from 'vue';
import Vuetify from 'vuetify';
import './plugins/vuetify';
import colors from 'vuetify/es5/util/colors';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify, {

  theme: {
    primary: colors.deepPurple.lighten1,
    secondary: colors.cyan.lighten2,
    accent: colors.red.accent3,
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
