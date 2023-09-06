<script setup>
    
import NotificationsList from '../components/NotificationsList.vue'
console.log("NotificationsView inititated");

</script>


<template>
    <div class="notifications">
      <NotificationsList />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .notifications {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>