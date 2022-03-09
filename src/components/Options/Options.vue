<script setup>
import { computed } from "@vue/runtime-core";
import { useCategoriesStore } from "../../stores/categories";
const categoryStore = useCategoriesStore();

let categories = computed(() => categoryStore.getAllategories)
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">

        </div>
        <div class="col-6">
          <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(category, index) in categories" :key="index">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{category}}</div>
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>