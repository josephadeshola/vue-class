
<script setup>
import RecipeCard from '../components/RecipeCard.vue'
import { useRecipeStore } from '../store/recipeStore.js'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
const store = useRecipeStore()
const { recipes } = storeToRefs(store)

onMounted(() => {
  store.getAllRecipes()
})
// const getName=(e)=>{
//   console.log(e);
//   console.log('from child');
// }
let getCount = ref(0)
const getHeart = (e) => {
  if (e) {
    getCount.value++
  } else {
    getCount.value--
  }
}
</script>
    <template>
  <div v-if="isLoading" class="loader7">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div v-show="!isLoading" class="container mt-4 fade-in">
    <div class="mt-5 py-1">Count:{{ getCount }}</div>
    <div class="row">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :rescipedetails="recipe"
        @heart="getHeart"
      />
    </div>
  </div>
</template>

<style>
.loader7 {
  display: flex;
  position: absolute;
  left: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loader7 span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #e9516a, #f38021);
  animation: loader7-animation 1.5s ease-in-out infinite;
}

@keyframes loader7-animation {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.5;
  }
}
</style>