<script setup>
  import {ref, defineAsyncComponent} from 'vue'
  const Todos = defineAsyncComponent(() => import('./components/Todos/Todos.vue'));
  const Options = defineAsyncComponent(() => import('./components/Options/Options.vue'));
  let swap = ref(0);
</script>

<template>
<div class="container-fluid py-2 text-light bg-dark">
  <div class="row align-items-center text-center">
    <div :class="!swap?'col bg-secondary':'col'" @click="swap = false">
      Todos
    </div>
    <div :class="swap?'col bg-secondary':'col'" @click="swap = true">
      Options
    </div>
  </div>
  <div class="row align-items-center text-center">
    <div class="col py-4 my-4">
      <Todos v-if="!swap"/>
      <Options v-if="swap"/>
    </div>
  </div>
  <div class="row align-items-center text-center">
    <div class="col py-4 my-4">
      Calendar
    </div>
  </div>
</div>
</template>

<style>
.dark{
  background-color: black;
}
</style>
