<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-3 mb-3 mx-auto">
      <h1>Science News</h1>
    </v-row>
    <v-row class="mt-3 mb-3">
      <v-col
        v-for="(headline, index) in paginatedNews"
        :key="index"
        lg="4"
        sm="12"
      >
        <News :headline="headline" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-5">
      <div class="text-center">
        <v-pagination
          v-model="pagination.page"
          :length="Math.ceil(headlines.length/pagination.perPage)"
        />
      </div>
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
      headlines: [],
      pagination: {
        page: 1,
        perPage: 15
      },
      pageSize: 45
    }
  },
  async fetch () {
    await this.getNews()
  },
  computed: {
    paginatedNews () {
      return this.headlines.slice((this.pagination.page - 1) * this.pagination.perPage, this.pagination.page * this.pagination.perPage)
    }
  },
  methods: {
    async getNews () {
      const data = await this.$axios.$get(`/top-headlines?country=us&category=science&pageSize=${this.pageSize}&apiKey=${process.env.API_SECRET}`)
      if (this.headlines !== data.articles) {
        this.headlines = data.articles
      }
    }
  }
}
</script>
