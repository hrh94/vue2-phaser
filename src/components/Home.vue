<template>
  <div id="game-container">
  </div>
</template>

<script>
  import Game from '../game'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    created () {
      window.game = new Game()
    },
    destroyed () {
      window.game.destroyed()
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
