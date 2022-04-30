<script setup>
import { useTodosStore } from "../../stores/todos";
import { useCategoriesStore } from "../../stores/categories";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const mytodo = ref({});
let create = ref(false);
const categoryStore = useCategoriesStore();
const todoStore = useTodosStore();
let categories = computed(() => categoryStore.getAllCategories)
let isEmpty = computed(() => todoStore.todoEmpty);

const AddTodo = () => {
  if (mytodo.value != {}) {
    mytodo.value.done = false;          
    todoStore.addTodo(mytodo.value);
    mytodo.value = {};
    create.value = false;
  }
};
</script>

<template>
  <button
    type="button"
    class="btn btn-primary my-4"
    @click="create = true"
    v-if="create == false"
  >
    Créer une tâche
  </button>
  <div
    class="card text-center border-secondary bg-dark mx-4"
    v-if="create == true"
  >
    <div class="card-header">Création d'une tâche</div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title">Titre</h5>
          <input type="text" v-model="mytodo.title" />
        </div>
        <div class="col">
          <h5>Catégorie</h5>
          <div class="container">
            <select
                class="form-select form-select-sm h-100 w-100"
                v-model="mytodo.category"
            >
                <option
                v-for="(category, index) in categories"
                :key="index"
                :value="category"
                >
                {{ category }}
                </option>
            </select>
          </div>
        </div>

        <div class="col">
          <h5>Example range</h5>
          <input type="range" class="form-range" id="customRange1">
        </div>
        <div class="col-12 my-4 py-4" style="border: 1px solid #2b3137;">
            <h5 class="card-title">Date</h5>
            <div class="row">
              <div class="col-6">
                <h6>Date</h6>
                <Datepicker locale="fr" v-model="mytodo.date" />
              </div>
              <div class="col-6">
                <h6>Période</h6>
                <Datepicker locale="fr" range multiCalendars v-model="mytodo.range" />
              </div>
            </div>
        </div>
        <div class="col-12 my-4 py-4">
            <h5 class="card-title">Description
            </h5>
            <textarea class="form-control" aria-label="With textarea" v-model="mytodo.description"></textarea>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted">
      <button type="button" class="btn btn-danger mx-4" @click="create = false">
        Cancel
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click="AddTodo"
        v-if="Object.keys(mytodo).length >= 4"
      >
        Add Todo
      </button>
    </div>
  </div>
</template>

<style>
.div{
  color: #2b3137;
}
</style>