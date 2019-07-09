<template>
  <div class="outside">
    <v-toolbar
      class="tool"
      dark
      extended
      flat
      height="75px"
    :style="{'background-image': 'url(' + require('@/assets/mariah.jpg') + ')'}"
    >
    </v-toolbar>

    <v-layout row pb-2           column
            align-center
            justify-center>
      <v-flex xs8 offset-xs2 class="innerTool">
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text ">
                 <ul class="buttonRow">
      <v-btn to="/hello" tag="li" large outline  color="white">parallax</v-btn> 
      <v-btn to="/inspire" tag="li" large outline color="white">blog</v-btn>
    </ul>
            </v-toolbar-title>

            <!-- <v-spacer></v-spacer> -->
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 75px;">
         
       
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>
<style lang="scss" scoped>
.items,
.list-move {
  transition: all 0.4s ease;
}

.active {
  fill: #e63946;
  .rect {
    transform: translate3d(0, 30px, 0);
  }
  .circ {
    transform: translate3d(30px, 0, 0) scale(0.5);
  }
  .text {
    transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
  }
  .footer {
    transform: translateX(100px, 0, 0);
  }
}
.page-enter-active {
  transition: opacity 0.25s ease-out;
}

.page-leave-active {
  transition: opacity 0.25s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
.card--flex-toolbar {
    margin-top: -64px;
  }
 .buttonRow{
     text-align: center;
 }
li{
    list-style: none;
}
.tool{
   background-size: cover;
   background-position: center;
}
.v-btn--active{
    background-color:rgba(255, 255, 255, 0.2) !important;
}
.innerTool{
margin-left: 5%;
margin-right: 5%;
max-width: 100%;
}

ul {
  padding: 0;
}

</style>
