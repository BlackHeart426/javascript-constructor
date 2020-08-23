import {TitleBlock, TextBlock} from './block'

export const blocks = {
  'text' : TextBlock,
  'title' : TitleBlock,
}

export class Constructor {
  constructor(type, value, styles = {}) {
    this.type = type,
    this.value = value,
    this.styles = styles

    this.block = this.getBlock()
  }

  getBlock() {
    return new blocks[this.type](this.value, this.styles)
  }
}
