import Phaser from 'phaser-ce'

const baseURI = localStorage.baseURI

export default class extends Phaser.State {
  init () {
    if (!this.device.desktop) {
      this.stage.backgroundColor = '#282C34'
      this.input.maxPointers = 1
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
      this.scale.forceOrientation(false, true)
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this)
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this)
    } else {
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
      this.stage.disableVisibilityChange = true
    }
  }
  preload () {
    this.load.crossOrigin = true
    this.load.image('start_bg', baseURI + '/img/bg.png')
  }
  create () {
    this.state.start('Preload')
  }
  enterIncorrectOrientation = () => {
    alert('请将手机纵向摆放')
  }
  leaveIncorrectOrientation = () => {
    alert('已经将手机纵向摆放')
  }
}
