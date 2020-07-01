import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Art from './views/Art.vue';
import Tech from './views/Tech.vue';
import Blog from './views/Blog.vue';

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
      beforeEnter() { location.href = 'https://medium.com/@annkilzer'; },
    },
  ],
});
