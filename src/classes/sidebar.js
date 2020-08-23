import {Constructor} from "./constructor";

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

    const constructor = new Constructor(type, controlValue, {styles: controlStyles})
    this.update(constructor.block)

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
