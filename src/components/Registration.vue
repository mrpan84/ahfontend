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
          <ion-select
            v-model="userType"
            class="input-field ion-select"
            :interfaceOptions="selectOptions"
            placeholder="Select User Type"
          >
            <ion-select-option value="farmer">Farmer</ion-select-option>
            <ion-select-option value="buyer">Buyer</ion-select-option>
            <ion-select-option value="auctioneer">Auctioneer</ion-select-option>
          </ion-select>
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
        <div class="security-question">
          <p class="security-question-text">Security Question:</p>
          <p class="security-question-subtext">What is your mother's maiden name?</p>
          <ion-input
            placeholder="Answer"
            v-model="securityAnswer"
            class="input-field"
          ></ion-input>
        </div>
        <ion-button expand="block" @click="register" class="register-button">Register</ion-button>
        <div class="login-link">
          <router-link class="login" to="/folder/signin">Already have an account? Login</router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonSelect, IonSelectOption } from '@ionic/vue';
import { ref, defineComponent } from 'vue';
import { personAddOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useStore } from '@/Store/store.ts';

export default defineComponent({
  name: 'RegistrationForm',
  components: {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonPage,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const store = useStore();
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    const userType = ref('');
    const showPassword = ref(false);
    const securityAnswer = ref('');

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const register = () => {
      console.log('Register');
    };

    const selectOptions = {
      header: 'Select User Type',
    };

    return {
      register,
      fullName,
      email,
      password,
      userType,
      showPassword,
      securityAnswer,
      toggleShowPassword,
      personAddOutline,
      eyeOutline,
      eyeOffOutline,
      selectOptions,
    };
  },
});
</script>

<style scoped>
  .registration-content {
    background-color: #f5f5f5;
  }
  .registration-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .registration-icon {
    font-size: 64px;
    color: #4F80E1;
    margin-bottom: 16px;
  }
  .registration-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 24px;
  }
  .input-container {
    margin-bottom: 24px;
  }
  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .show-password-checkbox {
    display: flex;
    align-items: center;
  }
  .checkbox-input {
    margin-right: 8px;
  }
  .checkbox-label {
    font-size: 14px;
    color: #777;
  }
  .security-question {
    margin-bottom: 24px;
  }
  .security-question-text {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }
  .security-question-subtext {
    font-size: 16px;
    color: #666;
    margin-bottom: 16px;
  }
  .register-button {
    background-color: #4F80E1;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    padding: 12px 20px;
    margin-bottom: 16px;
  }
  .login-link {
    font-size: 14px;
    color: #666;
  }
  .login-link a {
    color: #4F80E1;
    text-decoration: none;
  }
</style>
