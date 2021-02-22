
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'login', path: '', component: () => import('pages/Index.vue') },
      { name:'register', path: 'register', component: () => import('pages/Index.vue') },
      { path: '/dashboard', name:'home', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/orders', name:'orders', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/products', name:'products', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/users', name:'users', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/account', name:'account', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/account/edit', name:'edit', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/settings', name:'settings', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/store', name:'store', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },

      { path: '/users/1', name:'user', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/orders/1', name:'order', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
      { path: '/product/:id', name:'product', component: () => import('pages/Dashboard.vue'), meta: {requireAtuh: true}  },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
