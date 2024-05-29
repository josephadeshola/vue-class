
<script setup>
import RecipeCard from "../components/RecipeCard.vue";
import { onMounted } from "vue";
import { useRecipeStore } from '../store/recipeStore.js'
import { storeToRefs } from "pinia";

const store = useRecipeStore();
const {recipes} = storeToRefs(store)

onMounted(()=>{
    store.getAllRecipes()
})
</script>
    <template>
      <h3>Recipes</h3>
      <div class="container">
        <div class="row">
      <RecipeCard  v-for="(recipe, index) in recipes" :key="index" :rescipedetails="recipe"/>
        </div>
      </div>
    </template>

<style>

</style>