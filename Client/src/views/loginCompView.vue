<template>
  <section class="ma-0 pa-0 d-flex">
      <section class="gradientBox d-flex justify-center align-center">
        <dot-animation/>
      </section>
      <v-sheet width="400" class="mx-auto d-flex flex-column justify-center">
        <h2 class="text-h2 mb-16 text-uppercase align-self-center text-purple">Welcome!</h2> <!-- change color of text -->
        <p class="text-overline">Please log in</p>
        <v-form @submit.prevent="login">
          <v-text-field
              v-model="user.email"
              label="E-mail"
          ></v-text-field>

          <v-text-field
              v-model="user.password"
              type="password"
              label="Password"
          ></v-text-field>

          <v-alert
              type="error"
              variant="tonal"
              density="compact"
              closable
              prominent
              icon="mdi-alert-circle-outline"
              :text="errorMessage"
              class="mb-5"
              v-if=" errorMessage !== '' "
          ></v-alert>

          <v-btn type="submit" block class="mt-2 text-white" color="#EA698B" >Log in</v-btn> <!-- change color to variable -->
        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </v-sheet>
  </section>
</template>

<script setup>
import DotAnimation from "../Components/animation/dotAnimation.vue";
import axios from "axios";
import {ref} from "vue";
import { useAuthStore } from "../stores/auth.store.js";

let errorMessage = ref("");

const user = ref({
  email: "",
  password: "",
});

function login(e){
    e.preventDefault()
    errorMessage.value = ''
    const authStore = useAuthStore();
    authStore.login(user.value.email, user.value.password)
        .catch(error => errorMessage.value = error.response.data)
}

</script>

<style scoped lang="scss">

.gradientBox {
  background: linear-gradient(180deg, #47126B 0%, #EA698B 100%);
  width: 60vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
}



</style>