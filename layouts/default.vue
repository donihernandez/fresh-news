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
            <v-list-item-title>Headlines</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          to="/business"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Business News</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          to="/technology"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-robot-happy-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Technology</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline']
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
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
