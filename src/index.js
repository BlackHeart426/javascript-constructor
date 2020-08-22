import {Site} from "./classes/site";

import {model} from './model.js'
import './styles/main.css'
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site')

//Переписать на Observer
const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)

