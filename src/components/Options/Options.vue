<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useCategoriesStore } from "../../stores/categories";
import { useTodosStore } from "../../stores/todos";
import { BIconTrash, BIconPencilSquare } from 'bootstrap-icons-vue';

const categoryStore = useCategoriesStore();
const todoStore = useTodosStore();
let edit = ref(null)
let todos = computed(() => todoStore.getAllTodos);
let categories = computed(() => categoryStore.getAllCategories);
let countNumberOfTodoByCategory = computed(()=> todoStore.countNumberOfTodoByCategory);

let newCategory = ref('');
function del(index) {
  categoryStore.removeCategories(index);
}
const addCategory = () =>{
  categoryStore.addCategories(newCategory.value)
}
let updatedCategory = ref('')

function update (index){
  categoryStore.editCategory(edit, updatedCategory.value);
  edit.value = null
  console.log(categoryStore.getAllCategories);
}
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
                <div class="fw-bold" v-if="edit != index">{{category}}</div>
                <input type="text" name="" id="" placeholder="Ajoutez une catégorie" v-model="updatedCategory" class="m-4" v-if="edit == index">
                <button class="btn btn-outline-secondary btn-sm mb-1" v-if="edit == index" @click="update(index)">Valider</button>
              </div>
              <BIconPencilSquare class="cursor-pointer text-info mx-2 h6" @click="edit = index; updatedCategory=category " v-if="edit != index"/>
              <BIconTrash class="cursor-pointer text-danger mx-2 h6" v-if="edit != index" @click="del(index)"/>
              <span class="badge bg-primary rounded-pill" v-if="edit != index">{{countNumberOfTodoByCategory[index]}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  <input type="text" name="" id="" placeholder="Ajoutez une catégorie" v-model="newCategory" class="m-4">
                  <button class="btn btn-secondary m-4" @click="addCategory">Ajouter</button>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>