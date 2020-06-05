<template>
  <section class="login-container">
    <div class="login">
      <b-input type="email"
          v-model="email"
          placeholder="email@domain.com"
          icon="email"
          size="is-medium"
          rounded
          maxlength="50">
      </b-input>
      <b-input type="password"
          v-model="password"
          placeholder="**********"
          size="is-medium"
          rounded
          password-reveal>
      </b-input>
      <br>
      <b-button 
        rounded
        expanded
        size="is-medium"
        type="is-primary" 
        @click="login"
        >LOGIN
      </b-button>
    </div>
    <br>
    <div>
    <b-message type="is-danger" v-if="hasErrors">
      {{ hasErrors }}
    </b-message>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
      } catch( e ) {
        this.$store.commit('auth/firebase/SET_LOGIN_ERRORS', { error: e.message })
      }
    }
  },
  computed: {
    ...mapGetters({
      hasErrors: 'auth/firebase/hasErrors'
    })
  }
}
</script>

<style scoped>
  .login-container {
    height: 90vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .login {
    border-radius: 25px;
    padding: 5.5rem 2rem;
    background-color: #eee;
    box-shadow: 16px 13px 27px -9px #ccc;
  }
</style>