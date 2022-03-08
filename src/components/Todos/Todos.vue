<script setup>
import { computed } from "@vue/reactivity";
import { useTodosStore } from "../../stores/todos";
import CreateTodo from './CreateTodo.vue'
import Todo from './Todo.vue';
const todoStore = useTodosStore();
let todos = computed(() => todoStore.getAllTodos);
let removeTodo = todoStore.removeTodo;
let isEmpty = computed(() => todoStore.todoEmpty);

</script>

<template>
  <CreateTodo/>
  <div class="container">
    <Todo :todos="todos" :isEmpty='isEmpty' />
  </div>
</template>

<style>
</style>