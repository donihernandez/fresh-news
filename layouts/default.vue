<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Top Headlines</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          to="/search"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-text-search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Search News</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          prepend-icon="mdi-newspaper-variant-multiple-outline"
        >
          <template #activator>
            <v-list-item-title>Categories</v-list-item-title>
          </template>

          <v-list-item
            v-for="([title, icon, url], i) in categories"
            :key="i"
            link
            :to="url"
          >
            <v-list-item-title v-text="title" />

            <v-list-item-icon>
              <v-icon v-text="icon" />
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
      elevation="0"
      :elevate-on-scroll="true"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-avatar size="100">
        <v-img
          height="100%"
          class="mx-auto"
          src="/Fresh_News_Logo.png"
          alt="Fresh_News_Logo"
        />
      </v-avatar>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>Fresh News &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      fixed: false,
      categories: [
        ['General', 'mdi-newspaper-variant-multiple', '/general'],
        ['Business', 'mdi-office-building', '/business'],
        ['Technology', 'mdi-robot-happy-outline', '/technology'],
        ['Health', 'mdi-hospital-building', '/health'],
        ['Science', 'mdi-atom', '/science'],
        ['Sports', 'mdi-shoe-cleat', '/sports']
      ],
      title: 'Fresh News'
    }
  }
}
</script>

<style>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
