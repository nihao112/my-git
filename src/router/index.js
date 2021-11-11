import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Zhang from "../views/zhangxing.vue"
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/zhang",
		name: "Zhang",
		component: Zhang
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router