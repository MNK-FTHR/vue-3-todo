<script setup>
const props = defineProps({
  todos: Object,
  isEmpty: Boolean
})
</script>

<template>
    <div class="row align-items-center text-center my-4" v-if="!isEmpty">
      <div :class="{'justify-content-center text-center': true, 'col-6': todos.length > 1, 'col-12': todos.length == 1}" v-for="(todo, index) in todos" :key="index">
        <div :class="{'card text-white mb-3 centerBlock w-100': true, 'bg-success': todo.done, 'bg-secondary': !todo.done}" style="max-width: 18rem">
          <div class="card-header">{{todo.done}}</div>
          <div class="card-body">
            <h5 class="card-title">{{todo.title}}</h5>
            <cite title="Source Title">{{todo.category}}</cite>
            <p class="card-text">
              {{todo.description}}
            </p>
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