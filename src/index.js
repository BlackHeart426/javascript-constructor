import {Site} from "./classes/site";

import {model} from './model.js'
import {templates} from "./templetes";
import './styles/main.css'
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site')

new Sidebar('#panel')

site.render(model)

