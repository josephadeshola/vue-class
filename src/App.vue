<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FormComponent from './components/FormComponent.vue'
import OptionComponentVue from './components/OptionComponent.vue'

const user = {
  id:'123',
  name:"ayomide"
}
</script>

<template>
  <!-- <HelloWorld/> -->
  <!-- <FormComponent/> -->
  <div class="mx-auto text-center d-flex justify-content-center gap-5 mt-3">
  <RouterLink :to="{name:'home'}">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink :to="`/user/${user.name}`">User</RouterLink>
   <RouterLink to="/todo">TO-DO</RouterLink>
   <RouterLink to="/recipes">Go to Recipes</RouterLink>
  
  </div>

  <RouterView/>
  <!-- <OptionComponentVue/> -->
</template>

<style scoped>

</style>
