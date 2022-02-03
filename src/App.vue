<template>
  <div id="app" class = "app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>


<style scoped>
#app {
  height: 100vh;

  overflow: hidden;
  height: 100vh;  
}

.app {
  background: linear-gradient(21deg, #dd03e4, #5611ec);
}
</style>

