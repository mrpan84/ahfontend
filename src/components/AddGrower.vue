<template>
    <div class="main-container">
      <button class="open-modal-btn" @click="openModal">Add Grower</button>
      <div class="modal-overlay" :class="{ 'open': modalOpen }">
        <div class="add-grower-form-container">
          <h2>Add Grower</h2>
          <form>
            <div class="form-group">
              <label for="club-name">Club Name:</label>
              <input type="text" id="club-name" v-model="club_name" class="form-input" />
            </div>
  
            <div class="form-group">
              <label for="district">District:</label>
              <input type="text" id="district" v-model="district" class="form-input" />
            </div>
  
            <div class="form-group">
                <label for="registered-on">Registered On:</label>
                <input type="datetime-local" id="registered-date" v-model="registered" class="form-input" />
              </div>

            <div class="form-group">
              <div class="checkbox-container">
                <label for="is-club">Is Club:</label>
                <input type="checkbox" id="is-club" v-model="isclub" class="form-checkbox" />
              </div>
            </div>
  
            <div class="button-group">
              <button class="btn-save" @click="submitForm">Save</button>
              <button class="btn-cancel" @click="cancelModal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
 <script lang="ts">
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const modalOpen = ref(false);
    const isclub = ref(false);
    const club_name = ref('');
    const district = ref('');
    const registered = ref();


    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      // modalOpen.value = false;
      // formInfo.value.club_name = '';
      // formInfo.value.district = '';
      // formInfo.value.registered = '';
      // formInfo.value.isclub = false;
    };

    const saveGrower = () => {
        const url = "http://127.0.0.1:8000/api/v1/users/creategrower/";
        const payload = {
          "isclub": isclub.value,
          "club_name": club_name.value,
          "district": district.value,
          "registered": registered.value
        };
        const response = axios.post(url, payload)
            .then((response) => console.log(response))
      };

    const cancelModal = () => {
      closeModal();
    };

    const submitForm = async () => {
      await saveGrower();
    }

    return {
      modalOpen,
      isclub,
      club_name,
      district,
      registered,
      openModal,
      closeModal,
      saveGrower,
      cancelModal,
      submitForm,
    };
  }
};
</script>
  
  <style scoped>
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .open-modal-btn {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal-overlay.open {
    display: flex;
  }
  
  .add-grower-form-container {
    max-width: 400px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: #555;
    margin-bottom: 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .form-checkbox {
    margin-top: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-save {
    background-color: #4caf50;
    color: white;
    border: none;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }
  
  .btn-save:hover {
    background-color: #45a049;
  }
  
  .btn-cancel {
    background-color: #f44336;
    color: white;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-cancel:hover {
    background-color: #e53935;
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
  }
  
  .checkbox-container label {
    margin-right: 10px;
    margin-top: 10px;
  }
  </style>
  