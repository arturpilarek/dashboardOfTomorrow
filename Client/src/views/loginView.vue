<template>
  <section class="ma-0 pa-0 d-flex">
      <section class="gradientBox d-flex justify-center align-center">
        <dot-animation/>
      </section>
      <v-sheet width="400" class="mx-auto d-flex flex-column justify-center">
        <h2 class="text-h2 mb-16 text-uppercase align-self-center text-purple">Welcome!</h2> <!-- change color of text -->
        <p class="text-overline">Please log in</p>
        <v-form fast-fail @submit="login">
          <v-text-field
              v-model="email"
              label="E-mail"
          ></v-text-field>

          <v-text-field
              v-model="password"
              type="password"
              label="Password"
          ></v-text-field>

          <v-btn type="submit" block class="mt-2 text-white" color="#EA698B" >Log in</v-btn> <!-- change color to variable -->
        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
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
      email: '',
      password: ''
    }
  },
  methods: {
    login(e){
      e.preventDefault()
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password })
      };
      fetch('/login', requestOptions)
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