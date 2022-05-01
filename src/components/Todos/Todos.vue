<script setup>
import { computed, ref } from "@vue/reactivity";
import { useTodosStore } from "../../stores/todos";
import CreateTodo from './CreateTodo.vue'
import Filters from './Filters.vue'
import Todo from './Todo.vue';
const todoStore = useTodosStore();
let todos = computed(() => todoStore.getAllTodos);
let removeTodo = todoStore.removeTodo;
let isEmpty = computed(() => todoStore.todoEmpty);
console.log(todos.value);
let switcher = ref('todos')
function ouiYaUnEmitJaiCompris(e){
  switcher.value = e
}
</script>

<template>
  <CreateTodo/>
  <div class="container">
    <Filters @category="ouiYaUnEmitJaiCompris"/>
    <Todo :todos="todos[switcher]" :isEmpty='isEmpty' />
  </div>
</template>

<style>
</style>