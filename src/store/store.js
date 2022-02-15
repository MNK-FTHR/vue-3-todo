import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        todos: [],
    }),
    getters: {
        getAllTodos() {
            return this.todos
        },
        todoEmpty() {
            return this.todos.length <= 0
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }

    },
})