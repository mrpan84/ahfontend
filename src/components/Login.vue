<template>
  <ion-page>
    <ion-content class="login-content">
      <div class="login-container">
        <ion-icon :icon="personCircleOutline" class="login-icon"></ion-icon>
        <h1 class="login-title">Hi! Login Here </h1>
        <div class="input-container">
          <ion-input placeholder="Username" v-model="username" class="input-field"></ion-input>
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
        <ion-button id="open-loading" class="login-button">Login</ion-button>
        <ion-loading
          trigger="open-loading"
          message="Please Wait..."
          duration="3000"
          spinner="circles"
          class="custom-loading"
          :cssClass="['custom-loading']"
        ></ion-loading>
        <div class="login-links">
          <div class="create-account-link">
            <router-link class="create-account" to="/create-account">Create Account</router-link>
          </div>
          <div class="forgot-password-link">
            <router-link class="forgot-password" to="/forgot-password">Forgot Password?</router-link>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonIcon, IonInput, IonPage } from '@ionic/vue';
import { ref, defineComponent } from 'vue';
import { personCircleOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { IonLoading } from '@ionic/vue';
import axios from 'axios';

export default defineComponent({
  name: 'LoginForm',
  components: {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonPage,
    IonLoading,
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const showPassword = ref(false);

    const data = ref();

    const loadData = async () => {
    const response = await axios.get("http://192.168.142.195:8000/api/v1/users/users/1");
    data.value = response.data;
    console.log(response.data);
    }

    //loadData()

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const login = () => {
      console.log('Hello: ' + username.value + " pwd: " + password.value);
    };

    const goToRegistration = () => {
      console.log();
    };

    return { data, goToRegistration, login, username, password, showPassword, toggleShowPassword, personCircleOutline, eyeOutline, eyeOffOutline };
  },
});
</script>

<style scoped>
.login-content {
  --background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
}

.login-icon {
  font-size: 80px;
  color: #fff;
  margin-top: 64px;
}

.login-title {
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

.login-button {
  margin-top: 32px;
  width: 300px;
  --background: #fff;
  --color: #4F80E1;
  font-size: 16px;
  font-weight: bold;
}

.login-links {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create-account-link,
.forgot-password-link {
  margin-top: 8px;
}

.forgot-password,
.create-account {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}

.forgot-password:hover,
.create-account:hover {
  text-decoration: underline;
}
.custom-loading .loading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000vh;
  width: 1000vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.custom-loading .loading-spinner {
  --width: 100px;
  --height: 100px;
}
</style>
