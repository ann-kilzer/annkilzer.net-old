<template>
  <v-app>
    <v-toolbar
      flat
      app
      color="primary"
      dark
    >
      <v-toolbar-items>
        <v-layout
          fill-height
          align-center
        >
          <v-btn
            flat
            to="/"
          >
            <v-toolbar-title class="wordmark text-uppercase">
              <span>Ann Kilzer</span>
            </v-toolbar-title>
          </v-btn>
        </v-layout>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-layout
          v-for="item in pages"
          :key="item.name"
          fill-height
        >
          <v-btn
            flat
            :to="item.route"
          >
            <span class="mr-2">{{ item.name }}</span>
          </v-btn>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <home />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  computed: {
    pages() {
      return [
        {
          name: 'Art',
          route: '/art',
        },
        {
          name: 'Tech',
          route: '/tech',
        },
        {
          name: 'Blog',
          route: '/blog',
        },
      ];
    },
  },
};
</script>

<style>
.wordmark {
  font-family: 'Mogra';
  font-size: 36px;
}

</style>
