import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: ['Categorie 1', 'Categorie 2', 'Categorie 3']
  }),
  getters: {
    getAllCategories() {
      return this.categories
    },
    CategoriesEmpty() {
        return this.categories.length <= 0;
    },
    countNumberOfTodoByCategory(todos) {
      for (let index = 0; index < this.categories.length; index++) {
        todos.filter(todo => todo.category == this.categories[index]);
        
      }
      return 
    }
  },
  actions: {
    addategories(categorie) {
      this.categories.push(categorie);
    },
    removeategories(index) {
        this.categories.splice(index, 1)
    }
  }
})
