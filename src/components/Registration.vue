<template>
    <ion-page>
      <ion-content class="registration-content">
        <div class="registration-container">
          <ion-icon :icon="personAddOutline" class="registration-icon"></ion-icon>
          <h1 class="registration-title">Create an Account</h1>
          <div class="input-container">
            <ion-input
              placeholder="Full Name"
              v-model="fullName"
              class="input-field"
            ></ion-input>
            <ion-input
              placeholder="Email"
              v-model="email"
              class="input-field"
            ></ion-input>
            <ion-input
              placeholder="Password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="input-field"
            ></ion-input>
            <div class="show-password-checkbox">
              <input type="checkbox" id="showPasswordCheckbox" v-model="showPassword" class="checkbox-input">
              <label for="showPasswordCheckbox" class="checkbox-label">Show Password</label>
            </div>
          </div>
          <ion-button expand="block" @click="register" class="register-button">Register</ion-button>
          <div class="login-link">
            <router-link class="login" to="/login">Already have an account? Login</router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonContent, IonIcon, IonInput, IonPage } from '@ionic/vue';
  import { ref, defineComponent } from 'vue';
  import { personAddOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'RegistrationForm',
    components: {
      IonButton,
      IonContent,
      IonIcon,
      IonInput,
      IonPage,
    },
    setup() {
      const fullName = ref('');
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
  
      const toggleShowPassword = () => {
        showPassword.value = !showPassword.value;
      };
  
      const register = () => {
        console.log('Register');
      };
  
      return { register, fullName, email, password, showPassword, toggleShowPassword, personAddOutline, eyeOutline, eyeOffOutline };
    },
  });
  </script>
  <style scoped>
  .registration-content {
    --background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
  }
  .registration-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: sans-serif;
  }
  .registration-icon {
    font-size: 80px;
    color: #fff;
    margin-top: 64px;
  }
  .registration-title {
    margin-top: 32px;
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
  }
  .input-field {
    width: 300px;
    padding: 12px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .show-password-checkbox {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .checkbox-input {
    margin-right: 8px;
  }
  .checkbox-label {
    color: #fff;
    font-size: 14px;
  }
  .register-button {
    margin-top: 32px;
    width: 300px;
    --background: #fff;
    --color: #4F80E1;
    font-size: 16px;
    font-weight: bold;
  }
  .login-link {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }
  .login:hover {
    text-decoration: underline;
  }
  </style>
  