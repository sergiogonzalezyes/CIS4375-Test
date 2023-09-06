// Composables
import { createRouter, createWebHistory } from 'vue-router';

// Import the store
import { useAppStore } from '@/store/app.js';


// Routes definition
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('@/views/NotificationsView.vue'),
    meta: { requiresAuth: true }
  },
  // Fallback route redirects any unmatched routes to '/login'
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
  const store = useAppStore();
  const userIsAuthenticated = store.isAuthenticated;
  console.log(`User is authenticated: ${userIsAuthenticated}`);

  // If the route requires authentication and the user isn't authenticated, redirect to login
  if (to.matched.some(record => record.meta.requiresAuth) && !userIsAuthenticated) {
    console.log("Redirecting to login because user isn't authenticated.");
    router.push('/login');
  } else {
    next();
  }
});


export default router;
