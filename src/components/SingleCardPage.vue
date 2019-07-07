<template>
  <v-container>
    <v-card class="secondary lighten-2">
      <v-container
        pa-1
      >
        <v-card>
          <v-container class="white">
            <slot />
          </v-container>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
export default {

};
</script>
