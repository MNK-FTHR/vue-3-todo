<template>
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
  <input type="text" v-model="mytodo.text" />
  <button @click="AddTodo">Add Todo</button>
  <div v-if="!isEmpty">
    <p v-for="todo in todos" :key="todo.id">
      {{ todo.id }}. {{ todo }} <button @click="removeTodo(todo.id)">delete</button>
    </p>
  </div>
  <div v-else>No todos found</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { computed, ref } from "vue";
import { useMainStore } from "./store/store";
export default {
  name: 'App',
  setup() {
    const main = useMainStore();
    let todos = computed(() => main.getAllTodos)
    const mytodo = ref({});
    const AddTodo = () => {
      if (mytodo.value != "") {
        console.log(todos.value[0])
        if(todos.value[0] == undefined){
          mytodo.value.id = 0
        }else{
          mytodo.value.id = todos.value.at(-1).id +1
        }
        main.addTodo(mytodo.value);
        mytodo.value = {};
      }
    };
    return {
      AddTodo,
      mytodo,
      todos,
      isEmpty: computed(() => main.todoEmpty),
      removeTodo: main.removeTodo,
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
