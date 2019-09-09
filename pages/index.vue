<template>
  <div class="parallax" id="scrollDown">
    <v-content :class="`S${$vuetify.breakpoint.mdAndUp ? 'medi' : 'smll'}`">
      <section>
        <v-parallax
          src="https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/super/two.png"
          height="500"
        >
          <v-layout column align-center justify-center>
            <!-- <a href="#div-id" v-smooth-scroll="{ duration: 30000, offset: -50 }">Anchor</a>  -->

            <v-btn class="hell op" light large fab>
              <!-- to="#div-id"
              v-smooth-scroll="{ duration: 30000}"-->
              <v-icon class="down" x-large>arrow_drop_down</v-icon>
            </v-btn>
            <!-- <img src="@/assets/logos/bierebw.png" alt="Vuetify.js" height="200"> -->
            <!-- <div >
            <h1 class="white--text mb-2 display-1 text-xs-center hello">Oh hello</h1>
            <div class="subheading mb-3 text-xs-center hello">welcome</div>
            </div> -->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">I've heard that parralax is all the rage...</h2>
              <span class="subheading">So here you go :)</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap class="align-center justify-center text-xs-center">
                <v-flex xs12>
                  <v-card class="elevation-0 transparent text-xs-center">
                    <v-card-text class="text-xs-center">
                      <v-flex xs12>
                        <div
                          class="shapeshifter stepUp"
                          :style="{backgroundImage: 'url('+ dude +')'}"
                          :class="mobs ? 'mob1' : 'play2'"
                        ></div>
                      </v-flex>

                      <!-- <v-icon x-large class="black--text text--lighten-2">accessibility_new</v-icon> -->
                    </v-card-text>
                    <!-- <div class="shapeshifter play" :style="{backgroundImage: 'url('+ flame +')'}" >  </div> -->
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Imagine this page full of your content!</div>
                    </v-card-title>
                    <v-card-text>Especially attractive in mobile environments, this could be a starting point for any website need you may have. From stunning personal blogs to eye catching E-commerce stores. The parallax world is your oyster. Fully customizable and</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <parallaxx srrc="https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/super/one.png"></parallaxx>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <!-- <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash_on</v-icon>
                </v-card-text>-->
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
                  <!-- <v-icon x-large class="black--text text--lighten-2">gesture</v-icon> -->
                  <div class="shapeshifter step" 
                  :style="{backgroundImage: 'url('+ flame +')'}"
                   :class="mobs ? 'mob2' : 'play'"
                  ></div>
                  <!-- :class="$isMobile() ? 'mob2' : 'play'" -->
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

      <div v-for="(text, index) in texts" :key="text.id">
        <parallaxx
          :srrc="`https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/super/` +(index+3)+ `.png`"
        ></parallaxx>
        <parallaxx-text
          :title="text.title"
          :text1="text.text1"
          :secondTitle="text.secondTitle"
          :text2="text.text2"
          :ico="text.ico"
        ></parallaxx-text>
              
      </div>
      <div id="div-id"></div>
    </v-content>
  </div>
</template>

<script>
// Utilities
import { mapState } from "vuex";

if (process.browser) {
  // let mobs = require('vue-mobile-detection');
  // console.log(context.$isMobile());
}
export default {
  components: {
    Parallaxx: () => import("@/components/Parallax"),
    ParallaxxText: () => import("@/components/ParallaxText")
  },
  computed: {
    med() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    mobs() {
      return this.$device.isMobile;
    },
    ...mapState(["texts"])
  },
  data: () => ({
    // imagine: '@/assets/gallery/IMG_5992.jpg',
    flame: require("@/static/sprite_60fps.svg"),
    dude: require("@/static/dude_60fps.svg")
    // container : this.$refs.scrollDown
  }),
  methods: {
    down() {
      //  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
      // let elmnt = document.getElementById('scrollDown');
      // elmnt.scrollIntoView(false);
    }
  }
};
</script>
<style lang= "scss" scoped>
.op {
  opacity: 0.8;
}
.hell {
  margin-bottom: 20px;
  background-image: linear-gradient(
    -225deg,
    #455499 0%,
    #422247 29%,
    #de3430 67%,
    #f9cb45 100%
  );
}

.avatar {
  background-color: black;
}
.logo {
  margin-top: 150px;
}
.ico {
  /* margin-bottom: 80px; */
  margin-top: 76px;
}

.Smedi {
  margin-top: -8px;
}
.Ssmll {
  margin-top: -51px;
}
.hello {
  /* font-family: 'Special Elite', cursive !important; */
  /* font-family: 'Monoton', cursive !important; */
  /* font-family: 'Mountains of Christmas', cursive !important; */
  font-family: "ZCOOL KuaiLe", cursive !important;
}
.parallax {
  background-image: linear-gradient(
    -225deg,
    #455499 0%,
    #422247 29%,
    #de3430 67%,
    #f9cb45 100%
  );
}

/* top: 11%;
    left: 78%; */
/* fuck with these props and  variations depending on screen size */
/* on small screen for title and button margin-top: 220px; */
@keyframes play30 {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -720px 0px;
    /* animation-play-state:paused; */
  }
}
.step {
  animation-duration: 1500ms;
  animation-timing-function: steps(30);
}
.shapeshifter {
  width: 24px;
  height: 24px;
  transform: scale(2.5);
  margin: auto;
  /* justify-content: center; */
}
.shapeshifter.play {
  animation-name: play30;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  /* z-index: 10; */
}
/* .shapeshifter.play:hover {
animation-play-state:running;
 animation-iteration-count:2;
} */
@keyframes play18 {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -432px 0px;
  }
}
.stepUp {
  animation-duration: 1000ms;
  animation-timing-function: steps(18);
}

.shapeshifter.play2 {
  animation-name: play18;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
.down {
  opacity: 0;
  font-size: 53px;
  padding-top: 4px;
}
.down:hover {
  opacity: 1;
}
.mob1 {
  animation-name: play18;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
.mob2 {
  animation-name: play30;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>

 