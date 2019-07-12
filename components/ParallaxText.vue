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
                      <v-icon x-large class="blue--text text--lighten-2">mdi-color_lens</v-icon>
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
    //   value: {
    //     type: Object,
    //     default: () => ({})
    //   }
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