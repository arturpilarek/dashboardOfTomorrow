<template>
  <section class="ma-0 pa-0 d-flex flex-row-reverse align-center h-screen">
    <section class="gradientBox d-flex justify-center align-center h-screen">
      <DotAnimation />
    </section>
    <v-sheet width="400" class="mr-16 pr-10 d-flex flex-column justify-center">
      <h2 class="text-h2 mb-10 text-uppercase align-self-center text-purple">
        Sign up
      </h2>
      <!-- change color of text -->

      <v-form validate-on="submit" @submit="signUp">
        <v-text-field
          v-model="user.firstName"
          label="First name"
          required
          :rules="rules.nameRules"
        ></v-text-field>
        <v-text-field
          v-model="user.lastName"
          label="Last name"
          required
          :rules="rules.nameRules"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          label="E-mail"
          required
          :rules="rules.emailRules"
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          type="password"
          label="Password"
          :rules="rules.password"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.repeatPassword"
          type="password"
          label="Repeat password"
          required
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
        <v-alert
            v-if="statusMsg"
            closable
            density="compact"
            variant="tonal"
            :text="statusMsg"
            type="success"
        ></v-alert>

        <v-btn type="submit" block class="mt-2 text-white" color="#EA698B"
          >Sign up</v-btn>
        <!-- change color to variable -->
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Have an account? <a href="#">Login here</a></p>
      </div>
    </v-sheet>
  </section>
</template>

<script setup>
import { ref } from "vue";
import dotLogo from "../assets/LogoSvg/dot.png";
import DotAnimation from "../Components/animation/dotAnimation.vue";
import { mapStores } from "pinia";
import { useAuthStore } from "../stores/auth.store.js";

const errorMessage = ref("");
let statusMsg = ref("");


const user = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
});

const rules = {
  nameRules: [
    (value) => {
      if (value) return true;

      return "Name is required.";
    },
  ],
  emailRules: [
    (value) => {
      if (value) return true;

      return "E-mail is required.";
    },
    (value) => {
      if (/.+@.+\..+/.test(value)) return true;

      return "E-mail must be valid.";
    },
  ],
  password: [
    (value) => {
      if (/^(?=.*\d)(?=.+[!@#$%^&*])(?!.*[=-\s])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/.test(value)) return true;

      return "Password must contain at least one big character, one number and one special character ( no space, = or - )"
    },
  ],
};

function signUp(e) {
  e.preventDefault();

  if (user.value.password !== user.value.repeatPassword) {
    errorMessage.value = "Passwords do not match";
    return;
  }

  const authStore = useAuthStore();
  authStore.register(user.value.firstName, user.value.lastName, user.value.email, user.value.password)
      .then (statusMsg.value = "You succesfully registered. Please log in")
      .catch(error => errorMessage.value = error.response.data)
}
</script>


<style scoped lang="scss">
.gradientBox {
  background: linear-gradient(180deg, #47126b 0%, #ea698b 100%);
  width: 60vw;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
