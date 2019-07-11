<template>
  <div class="outside">
    <v-toolbar
      class="tool"
      dark
      extended
      flat
      height="75px"
    :style="{'background-image': 'url(' + banner + ')'}"
    >
    </v-toolbar>
<!-- EXTRA PADDING v pb-2   -->
<!-- align these buttons to   enter while expanding (maybe through computed properties?) -->
    <v-layout   
    align-center
            fill-height
            justify-center
            >
      <!-- <v-flex xs8 offset-xs2 class="innerTool"> -->
        <v-card class="card--flex-toolbar above">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2">
                 <ul class="buttonRow">
      <v-btn to="/" tag="li" large outline  color="white">Scrolling</v-btn> 
      <v-btn to="/inspire" tag="li" large outline color="white">blog</v-btn>
    </ul>
            </v-toolbar-title>

            <!-- <v-spacer></v-spacer> -->
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text class="type" >
         
       <vue-typer erase-style='backspace' :text="toType"></vue-typer>
          </v-card-text>
        </v-card>
      <!-- </v-flex> -->
    </v-layout>
</div>
</template>
<script>
import { mapState } from 'vuex'
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
  data(){
return {
  toType: 'Scroll down to see parallax effect :)'
}
  },
  computed: {
    ...mapState(['page']),
  banner (){
    if(this.page === 'inspire')
    {
      this.toType='Welcome to my simple photo blog!';
      return require('@/assets/rocks.jpg')
    }
    else{
      this.toType= 'Scroll down to see parallax effect :)';
      return require('@/assets/trianglifyLarge.png')
    }
  }
  },
  components: {
   VueTyper
},
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
   background-position: bottom;
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
.above{
  z-index: 10;
}
.type{
  background-color: #c0c0c0;
}
.vue-typer {
  // font-weight: bold;
  font-size: 130%;
}

</style>
