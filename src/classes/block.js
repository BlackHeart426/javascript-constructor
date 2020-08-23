import {col, row} from "../utils";

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  // Должен быть у всех кто унаследовал класс Block
  toHtml() {
    throw new Error('Метод toHtml должен быть реализован!')
  }
}

export class TitleBlock extends Block{
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    console.log('this.options', this.options)
    const {tag = 'h2', styles} = this.options
    return row(col(`
      <${tag}>${this.value}</${tag}>
    `), styles)
  }
}

export class ImageBlock extends Block{
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {alt, styles, imageStyles} = this.options
    const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`
    return row(html, styles)
  }
}

export class TextBlock extends Block{
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    return row(col(`
    <p style="margin-bottom: 0;">${this.value}</p>
  `), this.options.styles)
  }
}


export class TextColumnsBlock extends Block{
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    let html = this.value.map(item => col(item) )
    return row(html.join(''), this.options.styles)
  }
}
