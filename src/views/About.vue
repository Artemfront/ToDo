<template>
  <div id="about">
    <div class="container">
      <div class = "title">
        <h1>{{ title }}</h1>
      </div>

      <div class="description">
        <span>{{ description }}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'about',
  components: {

  },
  data() {
    return {
      title: "TodoList Application",
      description: "This is an about page",
    }
  },
  methods: {
    
  }
}
</script>


<style scoped>
#about {
  height: 100vh;
}

.container {
  margin:50px auto;
  max-width:1110px;
  width:100%;
  height: 700px;
  background-color:white;
  border-radius:15px;
}

.title {
  font-family:fantasy;
  font-size:14px;
  margin:0 auto;
  padding-top:30px;
  width:300px;
  text-align: center;
}

.description {
  max-width:250px;
  width:100%;
  margin:80px auto;

  font-size:24px;
  font-family:cursive;
  text-align:center;
}

</style>
