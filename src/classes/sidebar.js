import {TitleBlock, TextBlock} from './block'

export class Sidebar {
  constructor(selector, update) {
    this.update = update
    this.$el = document.querySelector(selector)

    this.init()
  }


  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  addBlock(event) {
    event.preventDefault()
    const type = event.target.name
    const controlValue = event.target.value.value
    const controlStyles = event.target.styles.value

    //Переписать ан классы
    const Constructor = type === 'text' ? TextBlock : TitleBlock

    const newBlock = new Constructor(controlValue, {controlStyles})
    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }

}

function block(type) {
  return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
         <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}
