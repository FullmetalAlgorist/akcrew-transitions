<template>
  <div class="parallax">
    <v-content>
      <section>
        <v-parallax :src="require('@/assets/two.png')" height="500">
          <v-layout
            column
            align-center
            class="white--text"
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
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
            
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax class="lines" :src="require('@/assets/three.png')" >
          <v-layout column align-end justify-center >
            <!-- align-center justify-center -->
            <h1 class="black--text mb-2 display-1 text-xs-right">Hire me today!</h1>
            <!-- <em>Kick-start your application today</em> -->
            <v-btn
              class="lighten-2 mt-4 mr-4"
              dark
              large
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <!-- <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">mdi-place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout> -->
              <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash_on</v-icon>
                    </v-card-text> -->
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
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
    </v-content>
  </div>
</template>

<script>
  export default {
    components: {

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
.lines{
  /* background-size: cover; */
   background-position: center right;
   /* position: left left; */
  /* position: fixed; */
  /* background-attachment: fill; */

}
.parallax{
  /* margin: 0, 3, 5, 0; */
  /* margin-top: -100px;   //fix alignment  issues if going with this method*/ 
margin-top: -75px;
}

</style>

