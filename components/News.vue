<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="headline.urlToImage"
    />

    <v-card-title>{{ headline.title }}</v-card-title>

    <v-card-subtitle class="mt-1">
      <div>Source: {{ headline.source.name }}</div>
      <div>Author: {{ headline.author }}</div>
      <div>Published At: {{ new Date(headline.publishedAt).toDateString() }}</div>
    </v-card-subtitle>

    <v-card-text class="text--primary mt-1">
      <p>
        {{ headline.description }}
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        link
        color="primary"
        rel="noreferrer noopener"
        :href="headline.url"
        target="_blank"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'News',
  props: {
    headline: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
