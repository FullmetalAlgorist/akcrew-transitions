 <template>
    <section>
        <v-parallax :src="srrc" height="500">
          <v-layout
            column
            align-center
            justify-center
          > 
          </v-layout>
        </v-parallax>
      </section>
      </template>

      <script>
  export default {
      data(){
          return  {

          }
      },
    props: {
      srrc: {
        type: String,
        required: true
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