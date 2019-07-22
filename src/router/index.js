import Vue from 'vue'
import Router from 'vue-router'

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
			name: 'CompanyDetail',
			path: '/companydetail',
			component: () => import('@/views/detail/CompanyDetail'),
		},
		{
			name: 'NotMatch',
			path: '*',
			component: () => import('@/views/404/404'),
		},
		{
			name: 'CooperateDetail',
			path: '/cooperateDetail',
			component: () => import('@/views/detail/CooperateDetail'),
		},
		{
			name: 'InformationDetail',
			path: '/informationDetail',
			component: () => import('@/views/detail/InformationDetail'),
		},
		{
			name: 'Collected',
			path: '/collected',
			component: () => import('@/views/list/Collected'),
		},
		{
			name: 'History',
			path: '/history',
			component: () => import('@/views/list/History'),
		}
	]
})