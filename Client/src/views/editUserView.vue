<template>
  <section>
    <h2>Edit user</h2>
    <v-sheet width="400">
      <v-form class="py-4" @submit="updateUser">
        <v-text-field v-model="email" type="email" label="Email"></v-text-field>
        <v-text-field
          v-model="first_name"
          type="text"
          label="First Name"
        ></v-text-field>
        <v-text-field
          v-model="second_name"
          type="text"
          label="Second Name"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
        <v-text-field
          v-model="repeatPassword"
          type="password"
          label="Repeat password"
        ></v-text-field>
        <v-alert
          v-if="statusMsg"
          closable
          :text="statusMsg"
          :type="getStatus"
        ></v-alert>
        <v-btn type="submit" block class="mt-2 text-white" color="#EA698B"
          >Update User</v-btn
        >
      </v-form>
    </v-sheet>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "editUserView",
  data() {
    return {
      email: "kapper@lechamp.dk",
      first_name: "Hihi",
      second_name: "Yoyo",
      password: "",
      repeatPassword: "",
      statusMsg: "",
    };
  },
  computed: {
    getStatus() {
      if (this.statusMsg === "User updated!") {
        return "success";
      } else {
        return "error";
      }
    },
  },
  onMounted: {
    // Use pinia to get user's data and set it to the data variables, so i i can use it in the form
  },
  methods: {
    updateUser(e) {
      e.preventDefault();
      this.statusMsg = "Updating user...";

      if (this.password && this.password !== this.repeatPassword) {
        this.statusMsg = "Passwords are not the same";
        return;
      }

      axios
        .put(`http://localhost:8081/updateUser/${this.email}`, {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          second_name: this.second_name,
        })
        .then((response) => console.log(response.data))
        .catch((error) => {
          console.log(error);
          this.statusMsg = "Error updating user";
        });

      this.statusMsg = "User updated!";
    },
  },
};
</script>