<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app.js';  // Adjust the path to your store
import LoginForm from '../components/LoginForm.vue';

const store = useAppStore();
const router = useRouter();
const errorMsg = ref('');  // To hold any error messages

const handleLogin = (credentials) => {
  const success = store.login(credentials.username, credentials.password);
  
  if (success) {
    // Redirect to dashboard if login is successful
    router.push('/dashboard');  
  } else {
    // Set error message to be displayed to the user
    errorMsg.value = 'Invalid username or password';
  }
};
</script>

<template>
<div class="login">
  <LoginForm :onLogin="handleLogin" :errorMsg="errorMsg" />
</div>
</template>

  
<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  