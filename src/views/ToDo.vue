<template>
  <h5 class="bg-dark text-light py-3 text-center mt-3">To-Do list</h5>
  <div class="d-flex justify-content-between px-md-5 px-2">
    Count:{{todoCount}}
    <div class="d-flex">
      <button class="btn fs-font btn-primary ms-2 w-50" @click="getTodos('all')">View all</button>
      <button class="btn fs-font btn-primary ms-2 w-50" @click="getTodos('complete')">
        Completed result
      </button>
      <button class="btn fs-font btn-primary ms-2 w-50" @click="getTodos('pending')">
        Pending result
      </button>
      <button class="btn fs-font btn-danger ms-2 w-50" @click="store.$reset()">
        Reset state
      </button>
    </div>
  </div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Product-Id</th>
        <th scope="col">Item</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr :key="i" v-for="(todo, i) in fitterTodo">
        <th scope="row">{{ todo.id }}</th>
        <td>{{ todo.todo }}</td>
        <td
          :id="todo.completed ? 'complete' : 'pending'"
          :class="todo.completed ? 'alert  alert-success' : 'alert alert-danger'"
        >
          {{ todo.completed ? 'Completd' : 'Pending' }}
        </td>
        <td>Edit</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { useToDo } from '../store/todoStore.js'
import { onMounted, ref, computed } from 'vue'
// state and getters = storeToRefs and turn it to a object

import {storeToRefs} from 'pinia';
const store = useToDo()
console.log(storeToRefs(store));
const {todos , todoCount} = storeToRefs(store)
const getEachStatus = ref('all')

const fitterTodo = computed(() => {
  if (getEachStatus.value === 'all') {
    return store.todos
  }
  if (getEachStatus.value === 'complete') {
    return store.completedTodo
  }
  if (getEachStatus.value === 'pending') {
    return store.pendingTodo
  }
})

const getTodos = (status) => {
  getEachStatus.value = status
}
// const {todos} = storeToRefs(store);
console.log(store)
onMounted(() => {
  if(!todoCount.value){
    store.getAllTodos()
  }
  store.getAllTodos()
})
</script>
<style>
.fs-font {
  font-size: 11px;
}
#complete {
  color: green;
}
#pending {
  color: rgb(233, 233, 12);
}
</style>