<script setup>
import { useCategoriesStore } from "../../stores/categories";
const categoryStore = useCategoriesStore();
let categories = computed(() => categoryStore.getAllCategories)

</script>

<template>

</template>

<style>

</style>