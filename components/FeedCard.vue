<template>
  <v-flex
    xs12
    :class="classes"
  >
    <base-card
   :height="`${$vuetify.breakpoint.lgAndUp ? value.h : '100%'}`"
      color="grey lighten-1"
      dark
     
      
    >
     <!-- href="#!" -->
      <no-ssr>

   <silentbox-single :src="`https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/blog-gallery/`+value.hero">
      <v-img
        :src="`https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/blog-gallery/`+value.hero"
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
              
             
            >
              Full Image
            </v-chip>
          </v-flex>
        </v-layout>
 
      </v-img>
      </silentbox-single>
       </no-ssr>
    </base-card>
  </v-flex>
</template>

<script>
//  import FingerprintSpinner from 'epic-spinners'
  
  export default {
    data (){
return{
  light: true,
      showLight: 'https://images.unsplash.com/photo-1416138645715-930585fe4ce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
}
    },
    components: {
      // FingerprintSpinner
    },
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
      // console.log(this.value.hero);
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
.silentbox-single{
  text-decoration: none !important;
}
</style>
