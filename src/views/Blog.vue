<template>
  <v-container>
    <blog-card title="Blog Post">
      This is a cool blog post
    </blog-card>
    <blog-card title="Blog Post">
      This is a cool blog post
    </blog-card>
  </v-container>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';

export default {
  components: {
    BlogCard,
  },
};
</script>
