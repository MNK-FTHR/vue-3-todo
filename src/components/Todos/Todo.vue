<script setup>
import { BIconTrash2, BIconPencilSquare, BIconCheck } from 'bootstrap-icons-vue';
import { useTodosStore } from "../../stores/todos";
import dateFormat from "dateformat"
import moment from "moment"

const props = defineProps({
  todos: Object,
  isEmpty: Boolean
})
const todoStore = useTodosStore();
let removeTodo = todoStore.removeTodo;
let checkTodo = todoStore.checkTodo;
</script>

<template>
    <div class="row align-items-center text-center my-4" v-if="!isEmpty">
      <div :class="{'justify-content-center text-center': true, 'col-6': todos.length > 1, 'col-12': todos.length == 1}" v-for="(todo, index) in todos" :key="index">
        <div :class="{'card text-white mb-3 centerBlock w-100': true, 'bg-success': todo.done, 'bg-secondary': !todo.done}" style="max-width: 18rem">
          <div class="card-header">
              <div class="">{{ dateFormat(todo.date, "dd/mm/yyyy HH:MM")}}
              </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{todo.title}}</h5>
            <p class="card-text">
              {{todo.description.length > 29 ? todo.description.substring(0, 29) + "..." : todo.description }}
            </p>
            <cite title="Source Title">{{todo.category}} {{todo.done}}</cite>
          </div>
          <div class="card-footer">              
            <div class="btn-group btn-group-sm mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary "><BIconCheck class="cursor-pointer rounded-circle bg-dark mt-2 py-1 text-success h2" @click="checkTodo(index)"/></button>
                <button type="button" class="btn btn-secondary "><BIconTrash2 class="cursor-pointer rounded-circle bg-dark mt-2 py-1 text-danger h2" @click="removeTodo"/></button>
                <button type="button" class="btn btn-secondary "><BIconPencilSquare class="cursor-pointer rounded-circle mt-2 py-1 bg-dark text-info h2" @click="removeTodo"/></button>
            </div>
            <p class="mt-1 text-danger bg-dark">{{moment(new Date(todo.date)).from(new Date())}}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Pas de tâches prévues</div>
</template>
<script>

export default {
  methods: {
  moment: function () {
    return moment();
  }
},
}
</script>

<style>
.centerBlock {
  display: table;
  margin: auto;
}

</style>