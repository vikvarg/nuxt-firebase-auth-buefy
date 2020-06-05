<template>
  <client-only>
    <div class="container">
      <login v-if="!isLogged" />
      <welcome v-if="isLogged" />  
    </div>
  </client-only>
</template>

<script>
import Welcome from '@/components/Welcome'
import Login from '@/components/auth/firebase/Login'

import { mapGetters } from 'vuex'

export default {
  components: {
    Welcome,
    Login
  },
  computed: {
    ...mapGetters({
      isLogged: 'auth/firebase/isLoggedIn',
      loggedEmail: 'auth/firebase/loggedEmail'
    })
  }
}
</script>

<style>

</style>
