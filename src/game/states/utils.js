export const setSize = (sprite, param, len) => {
  if (param === 'height') {
    let precent = len / sprite.height
    sprite.height = len
    sprite.width = sprite.width * precent
  } else {
    let precent = len / sprite.width
    sprite.width = len
    sprite.height = sprite.height * precent
  }
}
export const setFull = (obj) => {
  let Ratio = window.devicePixelRatio
  let w = document.documentElement.clientWidth || document.body.clientWidth
  let h = document.documentElement.clientHeight || document.body.clientHeight

  let ww = Ratio * w
  let hh = Ratio * h
  obj.width = ww
  obj.height = hh
}

export default {
  setSize,
  setFull
}
