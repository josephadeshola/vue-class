<template>
  <div class="mt-1">
    <i v-for="n in 5" :key="n" :class="getStarClass(n)" class="bi text-danger ms-2"></i>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  methods: {
    getStarClass(n) {
      if (n <= this.rating) {
        return 'bi-star-fill'
      } else {
        return 'bi-star'
      }
    }
  }
}
</script>

<style>
</style>