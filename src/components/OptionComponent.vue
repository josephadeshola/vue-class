<template>
  <form @submit.prevent="signUP" action="" class="col-8 px-4 mt-5 mx-auto shadow">
    <h4 class="text-center mt-3">Sign-up form</h4>
    <div>
      <label for="">Firstname</label>
      <input
        type="text"
        placeholder="name"
        class="form-control mt-2"
        v-model="v$.form.name.$model"
        name=""
        id=""
      />
    </div>
    <div v-for="error in v$.form.name.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
    <div>
      <label for="">email</label>
      <input
        type="email"
        placeholder="email"
        class="form-control mt-2"
        v-model="v$.form.email.$model"
        name=""
        id=""
      />
    </div>
    <div v-for="error in v$.form.email.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
    <div>
      <label for="">Password</label>
      <input
        type="text"
        placeholder="password"
        class="mt-2 form-control"
        v-model="v$.form.password.$model"
        name=""
        id=""
      />
    </div>
    <div v-for="error in v$.form.password.$errors" :key="error">
      <span class="text-sm text-center text-danger">{{ error.$message }}</span>
    </div>
    <div>
      <button class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'
// method = functions
// data is a function that return an object
export default {
  // option Api
  setup() {
    useVuelidate()
    return { v$: useVuelidate() }
  },
  data() {
    return {
      //   name: 'Ayomide',
      //   school: 'SQi',
      // User Input
      form: {
        name: '',
        email: '',
        password: ''
      }
      // validations rules
    }
  },
  validations() {
    return {
      form: {
        name: { required, min: minLength(7), max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(5), max: maxLength(10) }
      }
    }
  },
  methods: {
    signUP() {
      console.log('sign up', this.v$.form.name.$value)
    }
  }
}
</script>

<style>
</style>