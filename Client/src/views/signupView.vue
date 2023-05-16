<template>
  <section class="ma-0 pa-0 d-flex">
    <section class="gradientBox d-flex justify-center align-center">
      <dot-animation/>
    </section>
    <v-sheet width="400" class="mx-auto d-flex flex-column justify-center">
      <h2 class="text-h2 mb-16 text-uppercase align-self-center text-purple">Sign up</h2> <!-- change color of text -->
      <v-form fast-fail @submit="signUp">
        <v-text-field
            v-model="user.firstName"
            label="First name"
            :rules="rules.nameRules"
        ></v-text-field>
        <v-text-field
            v-model="user.lastName"
            label="Last name"
            :rules="rules.nameRules"
        ></v-text-field>
        <v-text-field
            v-model="user.email"
            label="E-mail"
            :rules="rules.emailRules"
        ></v-text-field>

        <v-text-field
            v-model="user.password"
            type="password"
            label="Password"
        ></v-text-field>
        <v-text-field
            v-model="user.repeatPassword"
            type="password"
            label="Repeat password"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2 text-white" color="#EA698B" >Sign up</v-btn> <!-- change color to variable -->
      </v-form>
    </v-sheet>
  </section>
</template>

<script>
import dotLogo from './../assets/LogoSvg/dot.png'
import DotAnimation from "../Components/animation/dotAnimation.vue";
export default {
  name: "loginView",
  components: {DotAnimation},
  data(){
    return {
      logo: dotLogo,
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
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user)
      };

      fetch('/register', requestOptions)
          .then(response => response.json())
          .then(data => alert(data));
    }
  }

}
</script>

<style scoped lang="scss">

.gradientBox {
  background: linear-gradient(180deg, #47126B 0%, #EA698B 100%);
  width: 60vw;
  height: 100vh;
}



</style>