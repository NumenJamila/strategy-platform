import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			name: 'Index',
			path: '/',
			component: () => import('@/views/index/Index'),
		},
		{
			name: 'Login',
			path: '/login',
			component: () => import('@/views/login/Login'),
		},
		{
			name: 'NotMatch',
			path: '*',
			component: () => import('@/views/404/404'),
		}
	]
})