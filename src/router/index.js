import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import About from "../views/About"
import Settings from "../views/Settings"
import TodoList from "../views/TodoList"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home, 
    name: "home"
  },
  {
    path:'/about',
    component: About,
    name: 'about'
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings"
  },
  {
    path: "/TodoList",
    component: TodoList,
    name: 'todolist'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
