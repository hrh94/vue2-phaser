import Phaser from 'phaser-ce'
import {setFull} from './utils'

const baseURI = localStorage.baseURI

export default class extends Phaser.State {

  preload () {
    let w = this.width
    let h = this.height
    let start_bg = this.add.sprite(0, 0, 'start_bg')
    setFull(start_bg)
    let loading = this.add.text(w * 0.5, h * 0.5, '0%',
      {
        fontSize: 60,
        fill: '#ffffff'
      })
    loading.anchor.set(0.5, 0.5)
    this.add.tween(loading).from({alpha: 0}, 500, null, true, 0, 0, false)

    this.load.crossOrigin = true
    this.load.atlasXML('sprites', baseURI + '/img/sprites.png', baseURI + '/img/sprites.xml')
    this.load.image('next', baseURI + '/img/next.png')
    this.load.image('img2_1', baseURI + '/img/2_1.jpg')
    this.load.image('img2_2', baseURI + '/img/2_2.jpg')
    this.load.onFileComplete.add(function (progeress) {
      loading.setText(progeress + '%')
    })
    this.load.onLoadComplete.add(function () {
      this.state.start('State1')
    })
  }
  create () {
    // this.state.start('State1')
  }
}
