<template>
  <div id="home">
    <div class="container">
      <div class = "title">
        <h1>{{ title }}</h1>
      </div>
      <div class="functions">
        <div class="todolist">
          <button class = "btn btnTodo" @click = "GoToTodoList">{{ btnTodo }}</button>
        </div>
        <div class="settings">
          <button class = "btn btnAbout" @click = "GoToAbout">{{ btnAbout }}</button>
        </div>
        <div class="about">
          <button class = "btn btnSettings" @click = "GoToSettings">{{ btnSettings }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      title: 'TodoList Application',
      btnTodo: 'TodoList',
      btnAbout: 'About',
      btnSettings: 'Settings'
    }
  },
  methods: {
    GoToAbout() {
      this.$router.push('/about')
    },
    GoToSettings: function() {
      this.$router.push('/settings')
    },
    GoToTodoList() {
      this.$router.push('/TodoList')
    }
  }
}
</script>


<style scoped>
#home {
  height: 100vh;
}

.container {
  margin:60px auto;
  max-width:1110px;
  width:100%;
  height: 700px;
  background-color:white;
}

.title {
  font-family:fantasy;
  font-size:14px;
  margin:0 auto;
  padding-top:30px;
  width:300px;
  text-align: center;
}

.functions {
  max-width:250px;
  width:100%;
  height: 300px;
  margin:100px auto;
  

  align-items:center;

  display: flex;
  flex-direction:column;
  justify-content: space-around;
}

.btn {
  width:300px;
  height: 50px;
  font-size: 24px;

  font-size: 28px;
  letter-spacing:2.5px;

  border:1px solid white;
  border-radius:10px;
  -webkit-box-shadow: 0px 3px 24px 12px rgba(0,0,0,0.3); 
  box-shadow: 0px 3px 24px 12px rgba(0,0,0,0.3);
}

.btn:hover {
  background-color:rgb(185, 182, 182);
  border:rgb(185, 182, 182);
  color:white;
  transition-duration: .5s;
  cursor: pointer;
}
</style>