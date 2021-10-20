<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Auth',
  middleware: 'user'
}
</script>

<style scoped>

</style>
