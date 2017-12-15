import Phaser from 'phaser-ce'

let w = null
let h = null
let img2_1 = null
let img2_2 = null

export default class extends Phaser.State {
  preload() {
    w = this.width
    h = this.height

    img2_1 = this.add.sprite(0, h * 0.5, 'img2_1')
    img2_1.width = w
    img2_1.height = h * 0.5
    img2_1.anchor.set(0, 1)
    this.add.tween(img2_1).to({'y': h}, 2000, Phaser.Easing.Linear.In, true, 500, -1, true)

    img2_2 = this.add.sprite(0, h * 0.5, 'img2_2')
    img2_2.width = w
    img2_2.height = h * 0.5
    this.add.tween(img2_2).to({'y': 0}, 2000, Phaser.Easing.Linear.In, true, 500, -1, true)
  }
}
