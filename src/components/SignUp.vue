<template>
  <div class="sign-up">
    <p>회원가입</p>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click="signUp">가입하기</button>
    <span>또는 <router-link to="/">로그인</router-link>으로 돌아가기</span>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp() {
        if(this.email === '' || this.password === ''){
          alert('이메일 또는 패스워드를 입력해주세요')
        }
        if(this.email !== '' && this.password !== ''){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('회원가입이 성공적으로 이루어졌습니다. 로그인해주세요!');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);           
          });
        }        
      }
    }
  }
</script>

<style scoped>
  .signUp {
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
    font-size: 20px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
  }
</style>