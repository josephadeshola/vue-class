<script setup>
import { ref, computed, reactive } from 'vue'

const name = 'Ayomide'
const num = ref(5)
const checkDay = ref(false)
const Day = ref('wednesday' || 'tuesday')
const check = ref(true)

const studentArray = reactive([
  { id: 1, name: 'Ayomide', paid: true },
  { id: 2, name: 'Pelumi', paid: false },
  { id: 3, name: 'Olamide', paid: false },
  { id: 4, name: 'Tope', paid: true },
  { id: 5, name: 'Samuel', paid: true }
])

const togglePaid = (index) => {
  let checkStudent = studentArray.find((std) => std.id == index + 1)
  checkStudent.paid = !checkStudent.paid
  console.log(checkStudent.paid)
}

const paidStudent = computed(() => {
  return studentArray.filter((std) => std.paid)
})
</script>

<template>
  <h4>Hello world, Welcome to Vue</h4>
  <p>{{ name }}</p>
  <button @click="num++">Increment</button>
  <p>{{ num }}</p>
  <!-- loop through -->

  <!-- <div v-for="(student, i ) in studentArray" :key="i">
    <p>{{student.name}}</p>
    <p>{{student.paid}}</p>
  </div> -->

  <!-- <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Paid</th>
      </tr>
    </thead>
    <tbody v-for="(student, index) in studentArray" :key="index">
      <tr>
        <th scope="row">{{ student.id }}</th>
        <td :id="student.paid ? 'paid' : 'unpaid'" @click="togglePaid(index)">
          {{ student.name }}
        </td>
        <td :id="student.paid ? 'text' : 'bytext'">{{ student.paid }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="Day == 'tuesday'">Today is Tuesday</div>
  <div v-else-if="Day == 'wednesday'">Today is Wednesday</div>
  <div v-else>Today is not Tuesday</div>

  <div v-show="check">Today is not Tuesday</div>

  <div v-for="std in paidStudent" :key="std.id">
    {{ std.name }}
  </div> -->
</template>

<style scoped>
#paid {
  background-color: green;

  color: white;
}
#text {
  color: green;
}
#bytext {
  color: red;
}
#unpaid {
  color: white;
  background-color: red;
}
</style>
