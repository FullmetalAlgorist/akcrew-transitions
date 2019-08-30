<template>
  <v-container
    grid-list-xl
   :class="`S${$vuetify.breakpoint.mdAndUp ? 'medi' : 'smll'}`"
  >
    <v-layout wrap>
      <!-- <v-flex xs12>
        <slot />
      </v-flex> -->

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
        :eyeD="i"
      />

      <!--  @click="showLightbox(`https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/blog-gallery/`+article.hero)" -->
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn
          v-if="page !== 1"
          class="ml-0 but"
          title="Previous page"
          square
          @click="page--"
        >
          <v-icon>arrow_back_ios</v-icon>
        </base-btn>
      </v-flex>

      <v-flex
        xs6
        text-xs-center
        subheading
      >
        PAGE {{ page }} OF {{ pages }}
      </v-flex>

      <v-flex
        xs3
        text-xs-right
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0 but"
          title="Next page"
          square
          @click="page++"
        >
          <v-icon>arrow_forward_ios</v-icon>
        </base-btn>
      </v-flex>
    </v-layout>
   
  </v-container>
</template>

<script>
  // Utilities

  import {
    mapState
  } from 'vuex'


  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
   
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 1],
      page: 1
    }),
    computed: {
      ...mapState(['articles']),
      pages () {      
        return Math.ceil(this.articles.length / 9)
      },
      paginatedArticles () {
       const start = (this.page - 1) * 9
        const stop = this.page * 9
        return this.articles.slice(start, stop)
      }
    },
methods: {
},
    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
<style lang="scss" scoped>
.Smedi{
   margin-top: -100px;
}
.Ssmll{
  margin-top: -80px;
}
.but{
  border-radius: 50% !important;
box-shadow: 0px 3px 5px -1px rgba(247, 240, 240, 0.2), 0px 6px 10px 0px rgba(236, 235, 235, 0.14), 0px 1px 18px 0px rgba(255, 255, 255, 0.12) !important;
}
// .v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat) {
//     box-shadow: 0px 3px 5px -1px rgba(247, 240, 240, 0.2), 0px 6px 10px 0px rgba(236, 235, 235, 0.14), 0px 1px 18px 0px rgba(255, 255, 255, 0.12);
// }
</style>


