import { defineStore } from 'pinia'
import { useTodosStore } from "./todos";

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: [{name: 'Courses', color: "#36cc00"}, {name: 'Sorties', color: "#fb00ff"}, {name: 'Rendez-vous', color: "#0065d1"}],
  }),
  getters: {
    getAllCategories() {
      return this.categories
    },
    CategoriesEmpty() {
      return this.categories.length <= 0;
    },
  },
  actions: {
    editCategory(index, newValue){
      const todosStore = useTodosStore();
      let todos = todosStore.getAllTodos;
      todos.todos.filter((todo)=>todo.category == this.categories[index].name).forEach((todo)=>todo.category = newValue)
      this.categories[index] = newValue;
    },
    addCategories(categorie) {
      this.categories.push(categorie);
    },
    removeCategories(index) {
        this.categories.splice(index, 1)
    },
  }
})
