<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-3 mb-3 mx-auto">
      <h1>Top Headlines</h1>
    </v-row>
    <v-row class="mt-3 mb-3">
      <v-col
        v-for="(headline, index) in headlines"
        :key="index"
        lg="4"
        sm="12"
      >
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
              :href="headline.url"
              target="_blank"
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn color="primary" @click="getNews">
        Refresh News
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headlines: []
    }
  },
  async fetch () {
    await this.getNews()
  },
  methods: {
    async getNews () {
      const data = await this.$axios.$get(`/top-headlines?country=us&apiKey=${process.env.API_SECRET}`)
      if (this.headlines !== data.articles) {
        this.headlines = data.articles
      }
    }
  }
}
</script>
