import './styles/main.css'
import {model} from './model.js'
import {templates} from "./templetes";

const site = document.querySelector('#site')

model.forEach(block => {
  const generate = templates[block.type]
  if (generate) {
    const html = generate(block)
    site.insertAdjacentHTML('beforeend', html)
  }
})

