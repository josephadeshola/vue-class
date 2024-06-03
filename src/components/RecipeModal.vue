<script setup>
defineProps(['rescipeDetails'])
</script>

<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          {{ rescipeDetails.name }} <b> Instructions </b>
          <button class="btn btn-danger">Edit recipe name</button>
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p style="font-size: 14px" v-for="(item, i) in rescipeDetails.instructions" :key="i">
          <i class="bi bi-patch-check text-danger"></i>
           <span class="ms-1">{{ item }}</span>
        </p>
        <div class="container">
          <div class="fw-bold fs-5 mb-3">Ingredients</div>
          <div class="get-grid">
            
            <p
              style="font-size: 13px"
              class="col-12 py-2 text-center rounded-2 alert alert-primary"
              v-for="(ingredients, i) in rescipeDetails.ingredients"
              :key="i"
            >
            <i class="bi bi-star-half text-danger"></i>  {{ ingredients }}
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>

<style>
.get-grid {
  column-gap: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 688px) {
  .get-grid {
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>