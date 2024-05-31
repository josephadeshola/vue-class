<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FormComponent from './components/FormComponent.vue'
import OptionComponentVue from './components/OptionComponent.vue'
import { useRecipeStore } from './store/recipeStore.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
const recipeStore = useRecipeStore()

const user = {
  id: '123',
  name: 'ayomide'
}
onMounted(() => {
  recipeStore.getAllRecipes()
})

let search = ref('')
const handleSearch = () => {
 recipeStore.searchRecipes(search.value);
}
</script>

<template>
  <!-- <HelloWorld/> -->
  <!-- <FormComponent/> -->
  <div class="">
    <nav class="navbar navbar-expand-lg shadow fixed-top bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex gap-3 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="text-decoration-none text-danger" :to="{ name: 'home' }"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="text-decoration-none text-danger" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="text-decoration-none text-danger" :to="`/user/${user.name}`"
                >User</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="text-decoration-none text-danger" to="/todo">TO-DO</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="text-decoration-none text-danger" to="/recipes"
                >Go to Recipes</RouterLink
              >
            </li>
            <div>{{ recipeStore.heartCount }}</div>
          </ul>
          <form class="d-flex" role="search" @submit.prevent="handleSearch">
            <input
              v-model="search"
              class="form-control rounded-5 shadow-sm hover-border-danger me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger rounded-5 w-50" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <RouterView class="mt-4" />
  <!-- <OptionComponentVue/> -->
</template>

<style scoped>
</style>
