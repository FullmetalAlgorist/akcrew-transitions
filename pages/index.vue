<template>
  <div class="parallax">
    <v-content>
      <section>
        <v-parallax :src="require('@/assets/two.png')" height="500">
          <v-layout
            column
            align-center
            justify-center
          > 
              <v-btn
              class="hell op"
              light
              small
              fab
            >
            </v-btn>
            <!-- <img src="@/assets/logos/bierebw.png" alt="Vuetify.js" height="200"> -->
          <div >
            <h1 class="white--text mb-2 display-1 text-xs-center">Oh hello</h1>
            <div class="subheading mb-3 text-xs-center">welcome</div>
          </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">I've heard that parralax is all the rage...</h2>
              <span class="subheading">
                So here you go :)
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    </v-card-text>
                  </v-card>
                </v-flex>
            
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

<parallaxx :srrc="require('@/assets/one.png')"></parallaxx>
      <!-- <section>
        <v-parallax class="lines" :src="require('@/assets/three6.png')" height="400">
          <v-layout column align-end justify-center >
                <div  class="text-xs-center">
      <v-img
      class="logo"
     height="175"
     width="175"
        :src="require('@/assets/logosblack.png')"
      > </v-img>  -->
     <!-- <v-icon  class="ico">home</v-icon> -->
<!-- </div>
           
          </v-layout>
        </v-parallax>
      </section> -->

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
           
              <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash_on</v-icon>
                    </v-card-text> -->
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">  <v-icon>information</v-icon> Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
          </v-layout>
        </v-container>
      </section>

<parallaxx :srrc="require('@/assets/three.png')"></parallaxx>
<parallaxx-text></parallaxx-text>
<parallaxx :srrc="require('@/assets/four.png')"></parallaxx>
<parallaxx-text></parallaxx-text>
<parallaxx :srrc="require('@/assets/five.png')"></parallaxx>
<parallaxx-text></parallaxx-text>
<parallaxx :srrc="require('@/assets/six.png')"></parallaxx>
<parallaxx-text></parallaxx-text>
    </v-content>
  </div>
</template>

<script>
  export default {
     components: {
      Parallaxx: () => import('@/components/Parallax'),
      ParallaxxText: () => import('@/components/ParallaxText')
    },
    computed:{
      med(){
        return this.$vuetify.breakpoint.mdAndUp;
      }
    },
    data: () => ({
      imagine: '@/assets/gallery/IMG_5992.jpg'
    })
  }
</script>
<style lang= "scss" scoped>
.op{
  opacity: .8;
  /* background-color: #aa37b4; */
  /* margin-top: 10px !important;
  margin-right: 23px; */
}
.hell{
    /* margin-top: 70px; */
    margin-bottom: 20px;
}
.avatar{
  background-color: black;
}
.logo{
  margin-top: 150px;
}
.ico{
 /* margin-bottom: 80px; */
 margin-top: 76px;
}






/* top: 11%;
    left: 78%; */
    /* fuck with these props and  variations depending on screen size */
/* on small screen for title and button margin-top: 220px; */

</style>

 