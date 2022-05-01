<script setup>
import { BIconTrash2, BIconPencilSquare, BIconCheck } from 'bootstrap-icons-vue';
import { useTodosStore } from "../../stores/todos";
import { useCategoriesStore } from "../../stores/categories";
import dateFormat from "dateformat"
import moment from "moment"
import { computed, ref } from '@vue/runtime-core';

const props = defineProps({
  todos: Object,
  isEmpty: Boolean
})
const todoStore = useTodosStore();
const categoriesStore = useCategoriesStore();
let categories = computed(() => categoriesStore.getAllCategories);
console.log(categories);
let removeTodo = todoStore.removeTodo;
let checkTodo = todoStore.checkTodo;
let h = ref("0123456789ABCDEF")
</script>

<template>
    <div class="row align-items-center text-center my-4" v-if="!isEmpty">
      <div :class="{'justify-content-center text-center': true, 'col-6': todos.length > 1, 'col-12': todos.length == 1}" v-for="(todo, index) in todos" :key="index">
        <div :class="{
          'card text-white mb-3 centerBlock w-100': true,
          'bg-success': todo.done,
          'bg-secondary': !todo.done,
            }" style="max-width: 18rem" :style="`
          border: 5px solid ${convertHex(todo.category.color, 1)};
          box-shadow: ${convertHex(todo.category.color, 0.4)} -5px 5px, ${convertHex(todo.category.color, 0.3)} -10px 10px, ${convertHex(todo.category.color, 0.2)} -15px 15px, ${convertHex(todo.category.color, 0.1)} -20px 20px, ${convertHex(todo.category.color, 0.05)} -25px 25px;
          `">
          <div :style="`box-shadow: rgba(255, 0, 0, 0.90) 0px 0px 15px ${0+todo.importance*2}px inset;`">
            <div class="card-header">
                <div class="">
                  {{ todo.date ? dateFormat(todo.date, "dd/mm/yyyy HH:MM") : `du ${dateFormat(todo.range[0], "dd/mm/yyyy HH:MM")} au ${dateFormat(todo.range[1], "dd/mm/yyyy HH:MM")}`}}
                </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{todo.title}}</h5>
              <p class="card-text">
                {{todo.description.length > 29 ? todo.description.substring(0, 29) + "..." : todo.description }}
              </p>
              <cite title="Source Title">{{todo.category.name}}</cite>
            </div>
            <div class="card-footer">              
              <div class="btn-group btn-group-sm mr-2" >
                  <button type="button" class="btn"><BIconCheck class="cursor-pointer rounded-circle bg-dark mt-2 py-1 text-success h2" @click="checkTodo(index)"/></button>
                  <button type="button" class="btn"><BIconTrash2 class="cursor-pointer rounded-circle bg-dark mt-2 py-1 text-danger h2" @click="removeTodo"/></button>
                  <button type="button" class="btn"><BIconPencilSquare class="cursor-pointer rounded-circle mt-2 py-1 bg-dark text-info h2" @click="removeTodo"/></button>
              </div>
              <p :class="{'mt-1': true,
                        'bg-warning': todo.date ? 
              moment(new Date(todo.date)).from(new Date()).substr(moment(new Date(todo.date)).from(new Date()).length - 5)=='hours'||
              moment(new Date(todo.date)).from(new Date()).substr(moment(new Date(todo.date)).from(new Date()).length - 4)=='hour'||
              moment(new Date(todo.date)).from(new Date()).substr(moment(new Date(todo.date)).from(new Date()).length - 6)=='minute'||
              moment(new Date(todo.date)).from(new Date()).substr(moment(new Date(todo.date)).from(new Date()).length - 7)=='minutes':
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 3) == 'day' ||
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 5) == 'hours' ||
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 7) == 'minutes' ||
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 6) == 'minute' ||
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 4) == 'hour',
          'bg-danger': todo.date ? 
              moment(new Date(todo.date)).from(new Date()).substr(moment(new Date(todo.date)).from(new Date()).length - 3)=='ago':
              moment(new Date(todo.range[1])).from(new Date()).substr(moment(new Date(todo.range[1])).from(new Date()).length - 3)=='ago'
              }">{{todo.date ? moment(new Date(todo.date)).from(new Date()): moment(new Date(todo.range[1])).from(new Date())}}</p>
            </div>
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
    },
    convertHex(hexCode, opacity = 1){
      console.log(hexCode);
      var hex = hexCode.replace('#', '');

      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      var r = parseInt(hex.substring(0,2), 16),
          g = parseInt(hex.substring(2,4), 16),
          b = parseInt(hex.substring(4,6), 16);

      /* Backward compatibility for whole number based opacity values. */
      if (opacity > 1 && opacity <= 100) {
          opacity = opacity / 100;   
      }
      
      return 'rgba('+r+','+g+','+b+','+opacity+')';
    }
  },
}
</script>

<style>
.centerBlock {
  display: table;
  margin: auto;
  box-shadow: rgba(182, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(255, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>