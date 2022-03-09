<script setup>
import { BIconTrash, BIconThreeDotsVertical } from 'bootstrap-icons-vue';
import { useTodosStore } from "../../stores/todos";
const props = defineProps({
  todos: Object,
  isEmpty: Boolean
})
const todoStore = useTodosStore();
let removeTodo = todoStore.removeTodo;
</script>

<template>
    <div class="row align-items-center text-center my-4" v-if="!isEmpty">
      <div :class="{'justify-content-center text-center': true, 'col-6': todos.length > 1, 'col-12': todos.length == 1}" v-for="(todo, index) in todos" :key="index">
        <div :class="{'card text-white mb-3 centerBlock w-100': true, 'bg-success': todo.done, 'bg-secondary': !todo.done}" style="max-width: 18rem">
          <div class="card-header">
            <div class="row">
              <div class="col-3 mt-2"><BIconThreeDotsVertical class="cursor-pointer py-2 text-dark h1"/></div>
              <div class="col-6 mt-3">{{todo.date}}</div>
              <div class="col-3 mt-2"><BIconTrash class="cursor-pointer rounded-circle bg-dark py-2 text-danger h2" @click="removeTodo"/></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{todo.title}}</h5>
            <p class="card-text">
              {{todo.description.length > 29 ? todo.description.substring(0, 29) + "..." : todo.description }}
            </p>
            <cite title="Source Title">{{todo.category}}</cite>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Pas de tâches prévues</div>
</template>

<style>
.centerBlock {
  display: table;
  margin: auto;
}

</style>