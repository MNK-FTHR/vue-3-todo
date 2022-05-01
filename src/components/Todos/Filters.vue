<script setup>
import { computed } from "@vue/runtime-core";
import { useCategoriesStore } from "../../stores/categories";
import { useTodosStore } from "../../stores/todos";

const categoryStore = useCategoriesStore();
let categories = computed(() => categoryStore.getAllCategories);
const todoStore = useTodosStore();
let todos = computed(() => todoStore.getAllTodos);
let countNumberOfTodoByCategory = computed(()=> todoStore.countNumberOfTodoByCategory);

</script>
<template>
  <div class="row my-4 align-items-center">
    <div class="col-12 d-grid gap-2 my-4">
      <button class="btn btn-primary" type="button" @click="$emit('category', 'todos')" >Tout (par date)</button>
    </div>
    <div class="col-4 d-grid gap-2" v-for="(category, i) in categories" :key="i">
      <button class="btn btn-primary" type="button" @click="$emit('category', category.name)" >{{category.name}} ({{countNumberOfTodoByCategory[i]}})</button>
    </div>
  </div>
</template>