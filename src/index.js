import './styles/main.css'
import {model} from './model.js'
import {templates} from "./templetes";

const site = document.querySelector('#site')

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHtml())
})

