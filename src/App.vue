<template>
  <v-app class="app">
    <v-toolbar>
      <v-toolbar-title 
        style="width:100%;margin-left:0;" 
        class="text-xs-center"
      >
        Status: <strong>BORN</strong> 
        <v-icon color="green" style="padding-bottom:4px;">done</v-icon>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          row
          wrap
        >
          <v-flex 
            xs12
            class="pa-2"
          >
            <v-card
              width="600px"
              class="grey darken-2"
              style="margin: 0 auto;"
            >
              <v-card-text>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/be5XNUeqJZU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-layout
              column
              wrap
              align-center
              justify-center
            >
              <v-card
                class="grey darken-2"
              >
                <v-card-title class="grey darken-3">
                  <span class="title white--text">PROGRESS</span>
                </v-card-title>
                <v-divider class="grey darken-4"/>
                <v-card-text>
                  <v-progress-circular
                    :size="200"
                    :width="10"
                    :rotate="-90"
                    :value="value"
                    :color="color()"
                  >
                    <strong :style="fontSize()">{{ value }}%</strong>
                  </v-progress-circular>
                </v-card-text>
              </v-card>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        value: 0,
        displayValue: 0
      }
    },
    methods: {
      round (number, precision) {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      },
      start () {
        setInterval(function () {
          this.progress();
        }.bind(this), 600);
      },
      progress () {
        let start = new Date('2017-08-15T12:00:00');
        let end = new Date('2018-05-29T12:00:00');
        let now = new Date();
        if (this.value === 0) {
          this.countUpValue(this.round(100 * (now - start) / (end - start), 2));
        } else {
          this.value = this.round(100 * (now - start) / (end - start), 2);
        }
      },
      countUpValue (total) {
        let timer = setInterval(function () {
          if (total > 1) {
            this.value++;
            total--;
          } else if (total < 1 && total > 0) {
            this.value += total;
            total = 0;
          } else {
            clearTimeout(timer);
          }
        }.bind(this), 4);
      },
      color () {
        if (this.value >= 100) {
          return 'red lighten-1';
        } else {
          return 'green';
        }
      },
      fontSize () {
        if (this.value >= 100) {
          return 'font-size:32px;';
        } else {
          return 'font-size:46px;';
        }
      }
    },
    mounted () {
      this.progress();
      this.start();
    }
  }
</script>

<style>
  .app {
    background-color: grey !important;
  }
  .progress-circular__overlay {
    transition: none !important;
    -webkit-transition: none !important;
  }
</style>