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
  // import { VueTyper } from 'vue-typer'

export default {
  data(){
    return {
      fixed: false
    }
  },
  components: {
    AppNavigation,
    // VueTyper
  }
}
</script>

<style>
/* global styles!! */
.theme--dark.application{
  background-image: linear-gradient(-225deg, #455499 0%, #422247 29%, #de3430 67%, #f9cb45 100%);
}

</style>