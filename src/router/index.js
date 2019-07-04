import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			redirect: '/index',
			component: Main,
			children: [{
				path: '/index',
				name: 'home',
				component: () => import('@/views/index/Index')
			}]
		},
		{
			name: 'Login',
			path: '/login',
			component: () => import('@/views/login/Login'),
		},
		{
			name: 'Search',
			path: '/search',
			component: () => import('@/views/search/Search'),
		},
		{
			name: 'NotMatch',
			path: '*',
			component: () => import('@/views/404/404'),
		}
	]
})