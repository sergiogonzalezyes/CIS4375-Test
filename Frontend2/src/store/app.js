// Utilities
import { defineStore } from 'pinia';
import router from '../router';

// store.js
export const useAppStore = defineStore('app', {
  state: () => ({
    isAuthenticated: localStorage.getItem('userIsAuthenticated') === 'true',
    username: '',
    role: '',
    logoutTimer: null // add this line
  }),
  actions: {
    login(username, password) {
      const hardcodedUsername = 'admin';
      const hardcodedPassword = 'admin';

      const hardcodedGuestUsername = 'guest';
      const hardcodedGuestPassword = 'guest';

      if (username === hardcodedUsername && password === hardcodedPassword) {
        this.isAuthenticated = true;
        this.username = username;
        this.role = 'admin';
        localStorage.setItem('userIsAuthenticated', 'true');
      } else if (username === hardcodedGuestUsername && password === hardcodedGuestPassword) {
        this.isAuthenticated = true;
        this.username = username;
        this.role = 'guest';
        localStorage.setItem('userIsAuthenticated', 'true');
      }

      // Set the timer to log out after 2 minutes
      this.logoutTimer = setTimeout(() => {
        this.logout();
      }, 2 * 60 * 1000); // 2 minutes
      
      router.push('/dashboard');
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('userIsAuthenticated');
      // Clear the logout timer if it's set
      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
      }
      
      router.push('/login');
    }
  }
});
