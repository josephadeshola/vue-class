
<script setup>
defineProps(['rescipedetails'])
import { useRecipeStore } from '@/store/recipeStore'
import { ref } from 'vue'
import RatingComp from './RatingComp.vue'
import RecipeModal from './RecipeModal.vue'


const recipeStore = useRecipeStore();
const added = ref(false)
const toggleAdded =()=>{
    added.value = !added.value
}
</script>

<template>
  <div class="get-display col-md-3 gap-5">
    <div class="card20 mt-5 shadow rounded">
      <div class="card20-header">
        <img
          :src="rescipedetails.image"
          class="card-img-top rounded position-absolute card20-header"
          alt="..."
        />

        <div class="card20-header-bar">
          <a href="#" class="btn-message">
            <span
              class="position-absolut top-0 ms-4 mt-3 start-1 translate-middle badge rounded-pill bg-dark"
            >
              {{ rescipedetails.rating }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </a>
        </div>

        <div class="card20-header-slanted-edge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
            <path class="polygon" d="M-20,200,1000,0V200Z" />
          </svg>
        </div>
      </div>

      <div class="card20-body mt-1 px-2">
        <div class="px-1">{{ rescipedetails.name }}</div>
        <div>
          <span class="text-danger px-1">{{ rescipedetails.prepTimeMinutes }} mins</span>
        </div>
        <div class="mt-1">
          <RatingComp :rating="rescipedetails.rating"/>
        </div>
        <div>
          <i
            style="cursor: pointer"
            :class="`bi float-end ${added ? 'bi-heart-fill text-danger' : 'bi-heart'}`"
            @click="toggleAdded"
          ></i>
        </div>
        <button
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="'#modal-' + rescipedetails.id"
          class="btn border button9 border-danger w-100 rounded-5 fw-bold mb-3"
        >
          Check Recipe
        </button>
        <div
          class="modal fade"
          :id="'modal-' + rescipedetails.id"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <RecipeModal :rescipeDetails="rescipedetails" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card20 {
  position: relative;
  height: 364px;
  background-color: #f5f5f5;
  font-family: 'Inter', sans-serif;
}

.card20-header {
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: top;
}

.card20-header:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgb(155, 70, 20), rgba(181, 181, 181, 0.1));
}

.card20-header-bar {
  position: absolute;
  top: 0;
  width: 100%;
}

.card20 .btn-message svg {
  margin-right: 8px;
  margin-top: 10px;
  float: right;
}

.card20 .btn-menu svg {
  margin-left: 2px;
  margin-top: 10px;
}

.card20 svg .polygon {
  fill: #f5f5f5;
}

.card20-header-slanted-edge {
  position: absolute;
  bottom: -4px;
  z-index: 1;
  width: 100%;
  right: 0;
  left: 0;
}

.card20 .name {
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
}

.card20 .job-title {
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
}

.card20 .bio {
  font-size: 12px;
  color: #7b7b7b;
  font-weight: 300;
  margin: 4px auto;
}

.card20-social-accounts {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.card20-social-accounts svg {
  width: 18px;
  height: 18px;
}

.card20-social-accounts a {
  margin-left: 13px;
}

.card20-social-accounts a:first-child {
  margin-left: 0;
}

.button9 {
  color: red;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border: none;
  border-radius: 10px;
  z-index: 0;
}
.button9:hover {
  color: #fff;
}
.button9:hover:after {
  height: 100%;
}
.button9:after {
  content: '';
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  bottom: 0;
  height: 0;
  color: #fff !important;
  width: 100%;
  background-color: rgb(197, 9, 9);
  border-radius: 50px;
}
</style>