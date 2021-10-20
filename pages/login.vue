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
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="mt-8">
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                outlined
                prepend-icon="mdi-account-circle-outline"
                name="login"
                label="Login"
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
                  mdi-lock-open-variant
                </v-icon>
                Login
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-text class="d-flex justify-space-between">
            <v-btn elevation="0" color="primary" text to="/register">
              Register Now
            </v-btn>
            <v-btn elevation="0" color="secondary" text to="/register">
              Forgot Password?
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn class="red darken-2" block elevation="0">
              <v-icon left dark>
                mdi-google
              </v-icon>
              Login with Google
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginUser', { email: this.email, password: this.password })
        .then(() => {
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>

<style scoped>

</style>
