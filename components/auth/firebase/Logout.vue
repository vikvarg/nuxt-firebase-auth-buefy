<template>
  <b-navbar-item @click="logout">
    <b-icon
      icon="logout"
      size="is-small"
    >
    </b-icon>
    &nbsp;Logout
  </b-navbar-item>
</template>

<script>
export default {
  name: 'logout',
  methods: {
    async logout() {
      try {
        await this.$fireAuth.signOut()
      } catch( e ) {
        console.log(e)
      }
    }
  }
}
</script>