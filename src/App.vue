<template>
  <div class="global">
    <AppHeader />

    <img alt="Vue logo" src="./assets/logo.png">

    <p>
      Multilevel menu page
    </p>
  </div>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";

export default {
  name: 'App',
  components: {AppHeader}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
