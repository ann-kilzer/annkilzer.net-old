import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Art from './views/Art.vue';
import Tech from './views/Tech.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/art',
      name: 'art',
      component: Art,
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech,
    },
    {
      path: '/blog',
      name: 'blog',
      /* eslint-disable no-restricted-globals */
      beforeEnter() { location.href = 'https://medium.com/@annkilzer'; },
    },
  ],
  mode: 'history', // makes the # go away
});
