<template>
  <div>
    <client-only>
      <b-navbar v-if="isLogged" fixed-top>
        <template slot="brand">
          <b-navbar-item>
            <b-icon
              icon="menu"
            ></b-icon>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item  tag="router-link" :to="{ path: '/' }">
              Home
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>

        <template slot="end">
            <logout />
        </template>
      </b-navbar>
    </client-only>
  </div>
</template>

<script>
import Logout from '@/components/auth/firebase/Logout'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logout
  },
  computed: {
    ...mapGetters({
      isLogged: 'auth/firebase/isLoggedIn',
      loggedEmail: 'auth/firebase/loggedEmail'
    })
  }  
}
</script>