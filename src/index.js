import {Site} from "./classes/site";
import {model} from './model.js'
import {templates} from "./templetes";
import './styles/main.css'

const site = new Site('#site')

site.render(model)

