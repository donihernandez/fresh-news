<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-0">
          <v-toolbar dark color="primary">
            <v-btn icon elevation="0" to="/">
              <v-icon dark>
                mdi-arrow-left
              </v-icon>
            </v-btn>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="mt-8">
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="email"
                outlined
                prepend-icon="mdi-account-circle-outline"
                name="register"
                label="Register"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="password"
                outlined
                prepend-icon="mdi-key"
                name="password"
                label="Password"
                type="password"
              />
              <v-btn color="primary" block type="submit">
                <v-icon left dark>
                  account-plus
                </v-icon>
                Register
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-text class="d-flex justify-center">
            <v-btn elevation="0" color="primary" text to="/login">
              Already have an account?
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn class="red darken-2" block elevation="0" to="/">
              <v-icon left dark>
                mdi-google
              </v-icon>
              Register with Google
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    register () {
      this.$store.dispatch('registerUser', { email: this.email, password: this.password })
        .then(() => {
          this.email = ''
          this.password = ''
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
`
