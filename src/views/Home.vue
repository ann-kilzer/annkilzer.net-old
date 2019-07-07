<template>
  <single-card-page>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        pr-4
      >
        <h1 class="secondary--text text--darken-2">
          Hello!
        </h1>
        <p>
          My name is Ann Kilzer. I'm a polymath, and my career is in software engineering.
          I am the Lead Software Engineer at blockchain-as-a-service startup
          <a
            target="_blank"
            href="https://www.curvegrid.com/"
          >
            Curvegrid
          </a>.
          I received my Master's in Computer Science from the University of Texas at Austin,
          where I spent a few years researching privacy. I grew up in Missoula, Montana, and
          attended college at Gonzaga University, where I majored in computer science, math,
          and art. I moved to Tokyo in early 2018 with no job, just an eager dream of living abroad.
          In my spare time, I enjoy Japanese Calligraphy (Shodo), Nihonga painting, and
          riding slow trains around Japan.
        </p>
        <p>
          初めまして！杏マリーキルザーです。東京にすんでいます。日本画と書道を作る大好きです。
          も電車大好きです🚂！よろしくお願いします。
        </p>
      </v-flex>
      <v-flex
        xs12
        sm6
      >
        <img
          src="@/assets/portrait-small.jpg"
          alt="Ann Kilzer Portrait"
        >
      </v-flex>
    </v-layout>
  </single-card-page>
</template>

<script>
import SingleCardPage from '../components/SingleCardPage.vue';

export default {
  components: {
    SingleCardPage,
  },
};
</script>

<style>
img {
    max-width: 100%;
    max-height: 100%;
}
</style>
