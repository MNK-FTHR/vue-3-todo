import { defineStore } from 'pinia'
import { useCategoriesStore } from "./categories";

export const useTodosStore = defineStore({
  id: 'todos',
  state: () => ({
    todos: []
  }),
  getters: {
    getAllTodos() {
      return this.todos
    },
    todoEmpty() {
        return this.todos.length <= 0;
    },
    countNumberOfTodoByCategory() {
      const categoryStore = useCategoriesStore();
      let categories = categoryStore.getAllCategories;
      let jsp = []
      for (let index = 0; index < categories.length; index++) {

        jsp[index] = this.todos.filter(todo => todo.category == categories[index]).length;

      }

      return jsp
    }
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    checkTodo(index) {
      this.todos[index].done == true ? this.todos[index].done = false : this.todos[index].done = true;
    },
    removeTodo(index) {
        this.todos.splice(index, 1)
    }
  }
})
