import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'layout',
		component: Layout,
		children: [
			{
				path: '/',
				component: () => import('../views/layout/Home.vue'),
			},
			{
				path: 'punch',
				component: () => import('../views/layout/Punch.vue'),
			},
			{
				path: 'application',
				component: () => import('../views/layout/Application.vue'),
			},
			{
				path: 'records',
				component: () => import('../views/layout/Records.vue'),
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
