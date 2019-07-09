<template>
  <div class="outside">
    <v-toolbar
      class="tool"
      dark
      extended
      flat
    >
      <v-toolbar-side-icon light></v-toolbar-side-icon>
    </v-toolbar>

    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text">Mariah's Website Examples</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 100px;">
         
            <ul class="buttonRow">
   <!-- <v-btn to="/" tag="li" flat large outline light color="white">index</v-btn> -->
      <v-btn to="/hello" tag="li" large outline  color="white">parralax</v-btn> 
      <!-- light -->
      <v-btn to="/inspire" tag="li" large outline color="white">blog</v-btn>
    </ul>
      
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
    background-color: #c9c9c9;
}
.v-btn--active{
    background-color:rgba(255, 255, 255, 0.2) !important;
}
</style>
