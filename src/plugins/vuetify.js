import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.green.darken1,
    secondary: colors.deepPurple.lighten1,
    accent: colors.red.accent3,
  },
});
