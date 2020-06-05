<template>
  <main>
    <navbar />
    <sidebar />
    <nuxt />
  </main>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }  
}
</script>

<style>
  main {
    margin-top: 20px;
  }
</style>