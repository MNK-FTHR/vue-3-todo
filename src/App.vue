<script setup>
  import {ref, defineAsyncComponent} from 'vue'
  const Todos = defineAsyncComponent(() => import('./components/Todos/Todos.vue'));
  const Options = defineAsyncComponent(() => import('./components/Options/Options.vue'));
  let swap = ref(0);
</script>

<template>
<div class="container-fluid py-2 text-light bg-dark" style="min-height: 100%;
    height: 100%;">
  <div class="row align-items-center text-center mx-4">
    <div :class="!swap?'col bg-secondary border border-secondary':'col  border border-secondary'" @click="swap = false">
      Todos
    </div> 
    <div :class="swap?'col bg-secondary border border-secondary':'col  border border-secondary'" @click="swap = true">
      Options
    </div>
  </div>
  <div class="row align-items-center text-center">
    <div class="col py-4 my-4">
      <Todos v-if="!swap"/>
      <Options v-if="swap"/>
    </div>
  </div>
</div>
</template>

<style>
.cursor-pointer {
   cursor: pointer;
}
</style>
