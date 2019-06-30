<template>
<v-app dark>
     <app-navigation />
    <v-content>
      <v-container px-0>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span class="twothousand">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  data(){
    return {
      fixed: false
    }
  },
  components: {
    AppNavigation,
  }
}
</script>

<style>
/* global styles!! */

</style>