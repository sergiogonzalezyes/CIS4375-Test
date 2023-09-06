<template>
  <v-app id="inspire">

    <div v-if="store.isAuthenticated">
      <!-- Sidebar Navigation (Drawer) -->
      <v-navigation-drawer app>
        <v-list rounded="lg">
          <!-- Dynamic links based on the user's role -->
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.path"
          >
            <v-list-item link>
              {{ link.name }}
            </v-list-item>
          </router-link>

          <v-divider class="my-2"></v-divider>

          <v-list-item
            color="grey-lighten-4"
            link
            @click="logout"
          >
            Logout
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- AppBar -->
      <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
          <!-- Dynamic greeting based on logged in user -->
          <span class="me-4">
            Hello, {{ store.username }}!
          </span>

          <v-avatar
            class="me-4"
            color="grey-darken-1"
            size="32"
          ></v-avatar>
          
          <v-responsive max-width="160">
            <v-text-field
              density="compact"
              flat
              hide-details
              label="Search"
              rounded="lg"
              single-line
              variant="solo-filled"
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>

      <!-- Main Content -->
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
    
    <!-- If user is not authenticated, only show the login page -->
    <div v-else>
      <router-view class="router-view-login"></router-view>
    </div>
  </v-app>
</template>



<script setup>
import { useAppStore } from '@/store/app.js';
import { useRouter } from 'vue-router';

const store = useAppStore();
const router = useRouter();

const links = [
  { name: 'Dashboard', path: '/dashboard', role: 'admin' },
  { name: 'Notifications', path: '/notifications' },
];

const logout = () => {
  router.push('/').then(() => {
    store.logout();
  });
};

</script>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Notifications',
    ],
  }),
}
</script>


<style scoped>
.router-view-login {
  height: 100vh;
  background: url('../assets/login-background.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>