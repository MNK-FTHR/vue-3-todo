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
let importance = ref(0);

const AddTodo = () => {
  if (mytodo.value != {}) {
    mytodo.value.done = false;
    mytodo.value.importance = importance.value;
    todoStore.addTodo(mytodo.value);
    mytodo.value = {};
    create.value = false;
  }
};

let lockDate = ref(false);
let lockRange = ref(true);
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
    class="card text-center bg-dark mx-4"
    :style="`border: 5px solid rgb(${211}, ${211-25*importance/1.5}, ${211-25*importance/1.5})`"
    v-if="create == true"
  >
    <div class="card-header">Création d'une tâche</div>
    <div class="card-body bg-dark" >
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
                {{ category.name }}
                </option>
            </select>
          </div>
        </div>
        <div class="col">
          <h5>Importance: {{importance}}</h5>
          <input type="range" class="form-range" min="0" max="10" step="1" v-model="importance">
        </div>
        <div class="col-12 my-4 py-4" style="border: 1px solid #2b3137;">
            <h5 class="card-title">Date</h5>
            <div class="row">
              <div class="col-6 pb-4" :style="lockDate? 'background-color: #556472; cursor: not-allowed;' : ''" @click="lockRange = true; lockDate = false; mytodo.range = null;">
                <h6>Date</h6>
                <Datepicker locale="fr" v-model="mytodo.date" :disabled="lockDate" />
              </div>
              <div class="col-6 pb-4" :style="lockRange? 'background-color: #556472; cursor: not-allowed;' : ''" @click="lockDate = true; lockRange = false; mytodo.date = null;">
                <h6>Période</h6>
                <Datepicker locale="fr" range multiCalendars v-model="mytodo.range" :disabled="lockRange" />
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
  color: rgb(195, 6, 34);
  color: rgb(77, 17, 17);
  color: rgb(71, 71, 71);
  color: rgb(211, 211, 211);
  color: #212529;
}
</style>