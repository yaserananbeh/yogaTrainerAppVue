<template>
  <v-container fluid class="fluid">
    <v-row align="center" justify="center">
      <v-cols cols="12" lg="10" sm="8" md="8" style="height: 100vh">
        <v-form ref="form" lazy-validation class="elevation-12 pa-8 mt-12">
          <h1 class="mb-10">Login</h1>

          <v-text-field
            v-model="email"
            type="email"
            name="email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            name="password"
            label="Password"
            :rules="passwordRules"
            required
          ></v-text-field>

          <v-btn
            class="primary darken-2 white--text mt-5"
            @click="onSubmit"
            type="submit"
          >
            Login
          </v-btn>
          <p class="mt-6">
            i don't have an account ?
            <NuxtLink to="/register">Sign up</NuxtLink>
          </p>
        </v-form>
      </v-cols>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
          "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
      ],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        console.log(this.email);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
</style>