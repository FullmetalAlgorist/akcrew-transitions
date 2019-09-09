<template>
<section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">{{ title }}</h2>
              <span class="subheading">
                {{ text1 }}
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <!-- <v-flex xs12 md4> -->
                    <v-flex xs12>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <!-- <v-icon v-if="ico" class="ico black--text text--lighten-2" >{{ ico }}</v-icon> -->
                     <div class="shapeshifter stepUp ico play2"
                          :style="{backgroundImage: 'url('+ ico +')'}"
                 
                  ></div>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{ secondTitle }}</div>
                    </v-card-title>
                    <v-card-text v-if="text2">
                      {{ text2 }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      </template>
            <script>
  export default {
      data(){
          return  {
 flame: require("@/static/sprite_60fps.svg"),
    dude: require("@/static/dude_60fps.svg"),
          snake: "https://mariah-transitions-blog.s3-us-west-2.amazonaws.com/snake.svg"
          }
      },
    props: {
      title: {
        type: String,
        required: true
      },
      text1: {
        type: String,
        required: true
      },
      secondTitle: {
        type: String,
        required: true
      },
      text2: {
        type: String,
        required: false
      },
      ico: {
        type: String,
       required: false
      }
    },

    computed: {
    //   classes () {
    //     return {
    //       'md6': this.size === 2,
    //       'md4': this.size === 3
    //     }
    //   }
    }
  }
  
</script>
<style lang="scss" scoped>
.ico{
   transform: scale(2.5);
   z-index: 10;
 }
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
.blue{
  background-color: blue;
}
.shapeshifter {
  width: 24px;
  height: 24px;
  transform: scale(2.5);
  margin: auto;
  /* justify-content: center; */
}
</style>