<template>
  <!-- <nav>
    <v-layout class="justify-center align-center wrap">
            <v-flex class="xs6">
<v-card>
        <v-card-title class="headline">
          Here ya go: {{ page }}
        </v-card-title>
        <v-card-text>
            <ul>
      <v-btn><nuxt-link exact to="/">index</nuxt-link></v-btn>
      <v-btn><nuxt-link to="/hello">hello</nuxt-link></v-btn>
      <v-btn><nuxt-link to="/inspire">inspire</nuxt-link></v-btn>
    </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
  
    </v-flex>
    <v-flex class="xs6">
 <svg :class="{ 'active' : (page === 'hello') }" xmlns="http://www.w3.org/2000/svg" width="100%" height="200" viewBox="0 0 447 442"> -->
      <!-- we use the transition group component, we need a g tag because it’s SVG-->
      <!-- <transition-group name="list" tag="g">
        <rect class="items rect" ref="rect" key="rect" width="171" height="171"/>
        <circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
        <g class="items text" id="text" key="text">
          <rect x="500" y="225" width="226" height="16"/>
          <rect x="500" y="252" width="226" height="16"/>
          <rect x="500" y="280" width="226" height="16"/>
        </g>
        <rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
      </transition-group>
    </svg>
    </v-flex>

    </v-layout>
     
    <br>

  </nav> -->
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
   <v-btn to="/" tag="li" flat large outline light color="white">index</v-btn>
      <v-btn to="/hello" tag="li" large outline  color="white">parralax</v-btn> 
      <!-- light -->
      <v-btn to="/inspire" tag="li" large outline color="white">inspire</v-btn>
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
