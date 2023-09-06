<script setup>
import DashboardLayout from '../components/DashboardLayout.vue'
console.log("DashboardView inititated");
</script>


<template>
    <div class="dashboard">
      <DashboardLayout />
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
  .dashboard {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  