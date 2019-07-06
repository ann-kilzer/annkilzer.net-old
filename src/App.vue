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
          <v-toolbar-title class="wordmark text-uppercase">
            <span>Ann Marie Kilzer</span>
          </v-toolbar-title>
        </v-layout>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-layout
          v-for="item in pages"
          :key="item.name"
          fill-height
        >
          <v-btn flat>
            <span class="mr-2">{{ item.name }}</span>
          </v-btn>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>

    <v-content />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
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
        },
        {
          name: 'Tech',
        },
        {
          name: 'Blog',
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
