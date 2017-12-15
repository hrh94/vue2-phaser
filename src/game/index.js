import Phaser from 'phaser-ce'
import Boot from './states/boot'
import Preload from './states/preload'
import State1 from './states/state1'
import State2 from './states/state2'

export default class Game extends Phaser.Game {
  constructor () {
    let baseURI = '../assets'

    localStorage.baseURI = baseURI
    document.getElementById('game-container').style.height = document.body.clientHeight + 'px'
    let Ratio = window.devicePixelRatio
    let w = document.documentElement.clientWidth || document.body.clientWidth
    let h = document.documentElement.clientHeight || document.body.clientHeight

    let ww = Ratio * w
    let hh = Ratio * h

    super(ww, hh, Phaser.AUTO, 'game-container')

    this.state.add('Boot', Boot)
    this.state.add('Preload', Preload)
    this.state.add('State1', State1)
    this.state.add('State2', State2)

    this.state.start('Boot')
  }
}
