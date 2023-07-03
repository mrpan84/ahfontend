<template>
  <div class="forgot-password-container">
    <h1 class="forgot-password-title">Forgot Password</h1>
    <p class="forgot-password-description">Answer the security question and set a new password.</p>
    
    <div class="security-question-container">
      <p class="security-question">{{ securityQuestion }}</p>
      <ion-input placeholder="Answer" v-model="answer"></ion-input>
    </div>
    
    <div class="password-inputs-container">
      <ion-input type="password" placeholder="New Password" v-model="newPassword"></ion-input>
      <ion-input type="password" placeholder="Confirm Password" v-model="confirmPassword"></ion-input>
    </div>
    
    <ion-button expand="block" @click="confirmPasswordReset">Confirm</ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonInput } from '@ionic/vue';
import { ref } from 'vue';
const securityQuestion = ref("What is your mother's maiden name?");
const answer = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const confirmPasswordReset = () => {
  // password reset confirmation logic here
};
</script>

<style scoped>
.forgot-password-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;
  background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
  color: #fff;
}
.forgot-password-title {
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
}
.forgot-password-description {
  margin-top: 8px;
  text-align: center;
}
.security-question-container {
  margin-top: 16px;
}
.security-question {
  margin-bottom: 8px;
}
.password-inputs-container {
  margin-top: 16px;
  width: 100%;
  text-align: center; 
}
</style>
