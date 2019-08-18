<template>
  <div class="mb-4">
    <v-card class="secondary lighten-2">
      <v-container
        pa-1
      >
        <v-card>
          <v-container class="white">
            <h1 class="secondary--text text--darken-2">
              {{ title }}
            </h1>
            <v-divider class="mb-3 secondary lighten-3" />
            <p>
              <slot />
            </p>
          </v-container>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
