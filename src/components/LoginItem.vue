<template>
  <div class="login">
    <h3>Show</h3>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password" @keyup.enter="login"><br>
    <button v-on:click="login">로그인</button>
    <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        if(this.email === '' || this.password === ''){
          alert('이메일 또는 패스워드를 입력해주세요')
        }
        if(this.email !== '' && this.password !== ''){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert(`님 환영합니다.`);
            this.$router.push('/hello');
          })
          .catch(err => {
            alert('로그인에 실패하였습니다 입력 내용 확인 후 다시 로그인해주세요'+ err.message);
          });           
        }
        
      },
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 15px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>