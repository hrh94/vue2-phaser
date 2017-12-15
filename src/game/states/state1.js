import Phaser from 'phaser-ce'
import {setSize} from './utils'

let w = null
let h = null
let next = null
let sprites = null
let group = null

export default class extends Phaser.State {
  preload () {
    w = this.width
    h = this.height

    group = this.add.group()

    sprites = this.add.sprite(w * 0.5, h * 0.6, 'sprites', 0)
    setSize(sprites, 'width', w * 0.5)
    sprites.anchor.set(0.5, 1)
    sprites.animations.add('run')
    sprites.animations.play('run', 4, true)

    group.add(sprites)

    next = this.add.sprite(w * 0.5, h * 0.8, 'next')
    setSize(next, 'width', w * 0.3)
    next.anchor.set(0.5, 0.5)
    this.add.tween(next).to({
      width: next.width + 20,
      height: next.height + 20
    }, 500, Phaser.Easing.Linear.In, true, 0, -1, true)

    group.add(next)

    next.inputEnabled = true
    next.events.onInputUp.add(function () {
      this.add.tween(group).to({alpha: 0}, 500, Phaser.Easing.Linear.In, true, 0, 0, false).onComplete.add(function () {
        this.state.start('State2')
      })
    })
  }
}
