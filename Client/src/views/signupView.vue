<template>
  <section class="ma-0 pa-0 d-flex flex-row-reverse align-center h-screen">
    <section class="gradientBox d-flex justify-center align-center h-screen">
      <dot-animation/>
    </section>
    <v-sheet width="400" class="mr-16 pr-10 d-flex flex-column justify-center">
      <h2 class="text-h2 mb-10 text-uppercase align-self-center text-purple">Sign up</h2> <!-- change color of text -->

      <v-alert
          type="error"
          variant="tonal"
          density="compact"
          closable
          prominent
          icon="mdi-alert-circle-outline"
          :text="errorMessage"
          class="mb-5"
      ></v-alert>

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
            required
        ></v-text-field>
        <v-text-field
            v-model="user.repeatPassword"
            type="password"
            label="Repeat password"
            required
        ></v-text-field>
        <v-btn type="submit" block class="mt-2 text-white" color="#EA698B" >Sign up</v-btn> <!-- change color to variable -->
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Have an account? <a href="#">Login here</a></p>
      </div>
    </v-sheet>
  </section>
</template>

<script>
import dotLogo from './../assets/LogoSvg/dot.png'
import DotAnimation from "../Components/animation/dotAnimation.vue";
import axios from "axios";

export default {
  name: "loginView",
  components: {DotAnimation},
  data(){
    return {
      logo: dotLogo,
      errorMessage: 'hej',
      rules: {
        nameRules: [
          value => {
            if (value) return true

            return 'Name is required.'
          },
        ],
        emailRules: [
          value => {
            if (value) return true

            return 'E-mail is required.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true

            return 'E-mail must be valid.'
          }
        ],
        password: [
          value => {
          if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* -`=)(?!.* ).{8,20}$/.test(value)) return true
          }
        ]
      },
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  methods: {
    signUp(e){
      e.preventDefault()
      if (this.user.password !== this.user.repeatPassword) {
        this.errorMessage = 'Passwords are not the same'
        return
      }

      axios.post("http://localhost:8081/register", {
        first_name: this.user.firstName,
        last_name: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      }
    }
}
</script>

<style scoped lang="scss">

.gradientBox {
  background: linear-gradient(180deg, #47126B 0%, #EA698B 100%);
  width: 60vw;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
}



</style>