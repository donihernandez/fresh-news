<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-3 mb-3 mx-auto">
      <h1 class="text-h1 font-weight-bold">Search News</h1>
    </v-row>
    <v-form @submit.prevent="search">
      <v-row align="center" justify="center" class="mt-3 mb-3 mx-auto">
        <v-col
          lg="5"
          cols="12"
        >
          <v-text-field v-model="term" type="text" label="Search" placeholder="Search by term..." />
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="fromDate"
                label="From Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="fromDate"
              @input="menu2 = false"
            />
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="toDate"
                label="To Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="toDate"
              @input="menu = false"
            />
          </v-menu>
        </v-col>

        <v-col
          v-if="fromDate !== '' || toDate !== ''"
          lg="2"
          cols="12"
        >
          <v-select v-model="sortedBy" label="Sort By" :items="sortList" />
        </v-col>
        <v-col lg="1" cols="12" align="center" justify="center">
          <v-btn block type="submit" color="primary">
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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
    <v-row v-if="paginatedNews.length > 0" align="center" justify="center" class="mb-5">
      <div class="text-center">
        <v-pagination
          v-model="pagination.page"
          :length="Math.ceil(news.length/pagination.perPage)"
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      menu: false,
      modal: false,
      menu2: false,
      term: '',
      sortedBy: '',
      fromDate: '',
      toDate: '',
      news: [],
      sortList: [
        'Relevancy',
        'Popularity',
        'Date'
      ],
      pagination: {
        page: 1,
        perPage: 15
      },
      pageSize: 45
    }
  },
  computed: {
    paginatedNews () {
      return this.news.slice((this.pagination.page - 1) * this.pagination.perPage, this.pagination.page * this.pagination.perPage)
    }
  },
  methods: {
    async search () {
      let url = `/everything?pageSize=${this.pageSize}`
      if (this.term !== '') {
        url += `&q=${this.term}`
      }
      if (this.fromDate !== '') {
        url += `&from=${this.fromDate}`
      }
      if (this.toDate !== '') {
        url += `&to=${this.toDate}`
      }
      if (this.sortedBy !== '') {
        if (this.sortedBy === 'Popularity' || this.sortedBy === 'Relevancy') {
          this.sortedBy = this.sortedBy.toLowerCase()
        } else if (this.sortedBy === 'Date') {
          this.sortedBy = 'publishedAt'
        }
        url += `&sortBy=${this.sortedBy}`
      }
      url += `&apiKey=${process.env.API_SECRET}`
      console.log(url)

      const data = await this.$axios.$get(url)
      if (this.news !== data.articles) {
        this.news = data.articles
      }

      this.term = ''
      this.category = ''
      this.sortedBy = ''
      this.fromDate = ''
      this.toDate = ''
    }
  }
}
</script>
