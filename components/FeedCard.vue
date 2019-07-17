<template>
  <v-flex
    xs12
    :class="classes"
  >
    <base-card
   :height="`${$vuetify.breakpoint.lgAndUp ? value.h : '100%'}`"
      color="grey lighten-1"
      dark
      href="#!"

    >
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)"
      >
      <!-- ^this gradient opacity (both but second seemed to have the effect) was at like .41 for some reason -->
        <v-layout
          v-if="!value.prominent"
          fill-height
          wrap
          text-xs-right
          ma-0
          
        >
          <v-flex xs12 :class="`S${eyeD === 0 ? 'smll' : 'nope'}`">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ value.author }}<br> {{ value.date }}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
              text-color="black"
            >
              Read More
            </v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      value: {
        type: Object,
        default: () => ({})
      },
      eyeD: {
        type: Number,
        required: true
      }
    },

    computed: {
      classes () {
        return {
          'md6': this.size === 2,
          'md4': this.size === 3
        }
      }
    },
    created(){
      console.log(this.value.hero);
    }
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}

.Smedi{
   margin-top: 10px;
}
.Ssmll{
  margin-top: 35px;
}
.Snope{
  margin-top: 0px;
}
</style>
