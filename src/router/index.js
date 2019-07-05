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
			component: () => import('@/views/index/Index')
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
			name: 'SearchCompany',
			path: '/searchcompany',
			component: () => import('@/views/search/SearchCompany'),
		},
		{
			name: 'SearchIndustry',
			path: '/searchindustry',
			component: () => import('@/views/search/SearchIndustry'),
		},
		{
			name: 'SearchPolicy',
			path: '/searchpolicy',
			component: () => import('@/views/search/SearchPolicy'),
		},
		{
			name: 'SearchRegion',
			path: '/searchregion',
			component: () => import('@/views/search/SearchRegion'),
		},
		{
			name: 'SearchReport',
			path: '/searchreport',
			component: () => import('@/views/search/SearchReport'),
		},
		{
			name: 'NotMatch',
			path: '*',
			component: () => import('@/views/404/404'),
		}
	]
})