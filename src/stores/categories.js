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
  },
  actions: {
    editCategory(index, newValue){
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
