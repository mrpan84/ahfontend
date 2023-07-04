<template>
  <div class="forgot-password-container">
    <div class="forgot-password-content">
      <ion-icon :icon="lockOpenOutline" class="forgot-password-icon"></ion-icon>
      <h1 class="forgot-password-title">Forgot Password</h1>
      <p class="forgot-password-description">Answer the security question and set a new password.</p>

      <div class="security-question-container">
        <p class="security-question">{{ securityQuestion }}</p>
        <ion-input placeholder="Answer" v-model="answer" class="input-field"></ion-input>
      </div>

      <div class="password-inputs-container">
        <ion-input type="password" placeholder="New Password" v-model="newPassword" class="input-field"></ion-input>
        <ion-input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="input-field"></ion-input>
      </div>

      <ion-button expand="block" @click="confirmPasswordReset" class="confirm-button">Confirm</ion-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonInput, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import { lockOpenOutline } from 'ionicons/icons';

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
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
}

.forgot-password-content {
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.forgot-password-icon {
  font-size: 48px;
  color: #333;
  margin-bottom: 16px;
}

.forgot-password-title {
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.forgot-password-description {
  margin-top: 8px;
  color: #555;
}

.security-question-container {
  margin-top: 16px;
}

.security-question {
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.password-inputs-container {
  margin-top: 16px;
}

.input-field {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: #f2f2f2;
  color: #333;
  font-size: 16px;
  margin-bottom: 8px;
}

.confirm-button {
  margin-top: 16px;
  --background: #4F80E1;
  --color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>
