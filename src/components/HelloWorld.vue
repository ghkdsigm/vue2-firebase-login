<template>
  <div>
    <div>
      <h2>Dashboard</h2>
      <p>This page is only visible to users that are currently logged in</p>
      <button v-on:click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('Successfully logged out');
          this.$router.push('/');
        })
        .catch(error => {
          alert(error.message);
          this.$router.push('/');
        });
    },
  },

}
</script>

<style>

</style>