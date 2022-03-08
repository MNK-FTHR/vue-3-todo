import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: ['Categorie 1', 'Categorie 2', 'Categorie 3']
  }),
  getters: {
    getAllategories() {
      return this.categories
    },
    ategoriesEmpty() {
        return this.categories.length <= 0;
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
