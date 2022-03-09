<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useCategoriesStore } from "../../stores/categories";
import { useTodosStore } from "../../stores/todos";

const categoryStore = useCategoriesStore();
const todoStore = useTodosStore();
let todos = computed(() => todoStore.getAllTodos);
let categories = computed(() => categoryStore.getAllCategories)
console.log(todos.value.filter(todo => todo.category == "Categorie 2").length);
let already = ref(todos.value.filter(todo => todo.category == "Categorie 2").length)
// let calculate = computed(()=>{
//   let xd = []
//   for (let index = 0; index < categories.length; index++) {
//     xd.push(todos.value.filter(todo => todo.category == this.categories[index]))
//     return xd
//   }
// })
let countNumberOfTodoByCategory = computed(()=> categoryStore.countNumberOfTodoByCategory(todos.value))
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
        </div>
        <div class="col-6">
          <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(category, index) in categories" :key="index">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{category}}</div>
              </div>
              <span class="badge bg-primary rounded-pill">already</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>