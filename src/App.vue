<template>
  <TopNav/>
  <input type="text" v-model="mytodo.text" />
  <input type="date" v-model="mytodo.date">
  <button @click="AddTodo">Add Todo</button>
  <div v-if="!isEmpty">
    <p v-for="(todo, index) in todos" :key="index">
      {{ index }}. {{ todo }} <button @click="removeTodo(index)">delete</button>
    </p>
  </div>
  <div v-else>No todos found</div>
</template>

<script>
import { computed, ref } from "vue";
import { useMainStore } from "./store/store";
import TopNav from '../src/components/TopNav.vue'
export default {
  name: 'App',
  setup() {
    const main = useMainStore();
    let todos = computed(() => main.getAllTodos)
    const mytodo = ref({});
    const AddTodo = () => {
      if (typeof mytodo.value.text !== 'undefined') {
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
  }, 
  components:{
    TopNav
  },
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
