<template>
  <v-app>
    <v-toolbar flat app>
      <v-toolbar-title class="wordmark text-uppercase">
        <span>Ann Marie Kilzer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
      >
        <span class="mr-2">Art</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
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
};
</script>

<style>
.wordmark {
  font-family: 'Mogra';
  font-size: 36px;
}

</style>
