<template>
  <div id="todolist">
    <div class="container">
        <div class = "title">
            <h1>{{ title }}</h1>
        </div>
        <div class="inputs">
            <input type="text" placeholder="Enter your task" v-model = "inputValue">
            <button class = "btn" @click = "addTask">Add</button>
            <button class = "btn" @click = "deleteAll">Delete all</button>
        </div>

        <div class="titleTasks">
          <span>Tasks</span>
        </div>

        <div class="tasks">
          <ul>
            <li v-for = "(item, i) in tasks" :key = "i">{{ i+1 }}. {{ item.value }}<button class = "btn remove" @click = "removeTask(i)">Done</button></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'todolist',
    components: {

    },
    data() {
        return {
          title: "TodoList Application",
          tasks: [],
          index: 0,
          inputValue: '',
        }
    },
    methods: {
      addTask() {
        if(this.inputValue === '') {
          return 
        }
        if(this.tasks.length == 5) {
          alert('Amount of your tasks is bigger than optimal amount, do you want to continue?')
          this.inputValue = ''
        } else {
          this.tasks.push({
            id: this.index = this.index+1,
            value: this.inputValue,
            checked: false
          })
          this.inputValue = ''
          localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
      },
      removeTask(key) {
        this.tasks.checked = true
        this.tasks.splice(key, 1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      },
      deleteAll() {
        if(this.tasks.length == 0) {
          return 
        } else {
          this.tasks = []
          localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
      },
    },
    mounted() {
      if(localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },
    beforeUpdate() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    updated() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}
</script>

<style scoped>
#todolist {
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


.btn {
  width:100px;
  height: 30px;
  font-size:15px !important;

  font-size: 20px;
  letter-spacing:2.5px;
}

.btn:hover {
  background-color:rgb(185, 182, 182);
  border:rgb(185, 182, 182);
  color:white;
  transition-duration: .5s;
  cursor: pointer;
}

.inputs {
    margin:30px auto;

    max-width:700px;
    height: 30px;
    width:100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.titleTasks {
  margin:40px auto;
  max-width:700px;
  width:100%;

  font-size: 36px;
  font-weight: 500;
  font-family: fantasy;
}

input {
    width:450px;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);

    font-size: 20px;
}

div.tasks {
  max-width:700px;
  width:100%;
  margin:0 auto;
}

ul {
  font-size: 32px;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin:30px 0;

  font-weight: 500;
  font-family: fantasy;
}

button.btn.remove {
  height: 38px;
  
  font-size: 16px;
}
</style>