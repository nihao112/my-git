import {createRouter,createWebHashHistory} from "vue-router"
import Home from "../views/Home.vue"
import List from "../views/List.vue"
const routes=[
	{
		path:"/",
		name:"Home",
		component:Home
	},
  {
		path:"/list",
		name:"List",
		component:List
	}
]
const router=createRouter({
	history:createWebHashHistory(),
	routes
})
export default router