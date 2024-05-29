<template>
  <!-- event modifiy -->
  <!-- option Api -->
  <!-- composition Api -->
  <form @submit.prevent="signUP" action="" class="col-8 px-4 mt-5 mx-auto shadow">
    <h4 class="text-center mt-3">Sign-up form</h4>
    <div>
      <label for="">Firstname</label>
      <input
        type="text"
        placeholder="name"
        class="form-control mt-2"
        v-model="v$.name.$model"
        name=""
        id=""
      />
      <div v-for="error in v$.name.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
      <label for="">Lastname</label>
      <input
        type="email"
        placeholder="useremail"
        class="form-control mt-2"
        v-model="v$.useremail.$model"
        name=""
        id=""
      />
      <div v-for="error in v$.useremail.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
      <label for="">Password</label>
      <input
        type="password"
        placeholder="password"
        class="form-control mt-2"
        v-model="v$.password.$model"
        name=""
        id=""
      />
      <div v-for="error in v$.password.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
      <div class="d-flex justify-content-around">
        <div>
          <label for="" class="fw-bold mt-3">Gender: </label> <br />
          <input type="radio" class="mt-3" v-model="gender" name="" id="" />
          <label for="">Male</label>
          <input type="radio" class="mt-3" v-model="gender" name="" id="" />
          <label for="">female</label>
        </div>

        <div class="mt-1">
          <label for="" class="mt-1 py-2 fw-bold">Skills: </label> <br />
          <input type="checkb ox" class="" value="React js" v-model="skill" />
          <label for="">React js</label>
          <input type="checkbox" class="" value="Vue" v-model="skill" />
          <label for="">Vue</label>
          <input type="checkbox" class="" value="Laravel" v-model="skill" />
          <label for="">Laravel</label>
        </div>
      </div>
      <div>
        <label for="" class="mt-2">Occupation</label>
        <select name="occupation" id="" class="form-control select-option" v-model="occupation">
          <option value="student">Student</option>
          <option value="trader">Trader</option>
          <option value="civil servant">Civil Servant</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
      <div>
        <button class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
      </div>
    </div>
  </form>
</template>

<script setup>

import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'
import { ref, onMounted, computed } from 'vue'

const name = ref('')
const useremail= ref('')
const password = ref('')
const gender = ref('')
const skill = ref([])
const occupation = ref('')
const users = ref([])

// const form = ref({
//   name: '',
//   email: '',
//   password: ''
// })
const rules = computed(() => ({
  // form: {
    name: { required, min: minLength(5), max: maxLength(10) },
    useremail: { required, email },
    password: { required, min: minLength(6), max: maxLength(8) }
  // }
}))

const v$ = useVuelidate(rules,{name,email,password});
const signUP = () => {
  const userObject = {
    firstname: firstname.value,
    lastname: lastname.value,
    gender: gender.value,
    skill: skill.value,
    occupation: occupation.value
  }
  users.value.push(userObject)
  console.log(users.value)
  localStorage.setItem('users', JSON.stringify(users.value))
}

onMounted(() => {
  users.value = localStorage['users'] ? JSON.parse(localStorage.getItem('users')) : []
  //    users.value = JSON.parse(localStorage.getItem("user"))
})
</script>
<style>
</style>