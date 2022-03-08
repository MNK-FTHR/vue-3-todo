<script setup>
import { ref, computed } from "@vue/reactivity";
import { useTodosStore } from "../../stores/todos";
const todoStore = useTodosStore();
const mytodo = ref({});
let todos = computed(() => todoStore.getAllTodos);
let isEmpty = computed(() => todoStore.todoEmpty);
let removeTodo = todoStore.removeTodo;
let create = ref(false);
const AddTodo = () => {
  if (mytodo.value != {}) {
    mytodo.value.done = false;
    mytodo.value.date_create =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth()) +
      "-" +
      (new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate());
    mytodo.value.date_update = "";
    console.log(mytodo.value);
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
          <h5 class="card-title">Description</h5>
          <input type="text" v-model="mytodo.description" />
        </div>
        <div class="col">
          <h5 class="card-title">Date</h5>
          <input
            type="date"
            :min="
              new Date().getFullYear() +
              '-' +
              (new Date().getMonth() + 1 < 10
                ? '0' + (new Date().getMonth() + 1)
                : new Date().getMonth()) +
              '-' +
              (new Date().getDate() < 10
                ? '0' + new Date().getDate()
                : new Date().getDate())
            "
            v-model="mytodo.date"
          />
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
        v-if="Object.keys(mytodo).length == 3"
      >
        Add Todo
      </button>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center text-center" v-if="!isEmpty">
      <div class="col-6 d-flex justify-content-center" v-for="(todo, index) in todos" :key="index">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem">
          <div class="card-header">{{todo.title}}</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Pas de tâches prévues</div>
  </div>
</template>

<style>
</style>