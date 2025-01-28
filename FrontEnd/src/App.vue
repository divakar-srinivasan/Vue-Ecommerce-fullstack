<template>
  <v-app>
    <v-main>

      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <!-- <FooterComponent /> -->
    </v-main>
  </v-app>
</template>

<script>
// import FooterComponent from './components/FooterComponent.vue';
// import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'App',
  components: {
    // FooterComponent,
    // HomeComponent
  },
};
</script>

<style></style>
