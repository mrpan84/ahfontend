<template>
    <ion-header>
      <ion-toolbar>
        <div class="button-container">
          <ion-button id="open-modal" expand="block" size="small" color="success" @click="openModal">Create Auction</ion-button>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-modal :is-open="isModalOpen" @closed="onModalClosed">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()" color="danger">Cancel</ion-button>
            </ion-buttons>
            <ion-title>New Auction Form</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()" color="success">Confirm</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="form-container">
            <h2>Add Auction Below:</h2>
            <form>
              <div class="form-group">
                <select-grower />
              </div>
  
              <div class="form-group">
                <label for="created-date">Created Date:</label>
                <input type="datetime-local" id="created-date" v-model="createdDate" class="form-input" />
              </div>
  
              <div class="form-group">
                <label for="start-time">Start Time:</label>
                <input type="datetime-local" id="start-time" v-model="startTime" class="form-input" />
              </div>
  
              <div class="form-group">
                <label for="end-time">End Time:</label>
                <input type="datetime-local" id="end-time" v-model="endTime" class="form-input" />
              </div>
  
              <div class="form-group">
                <label for="venue">Venue:</label>
                <input type="text" id="venue" v-model="venue" class="form-input" />
              </div>
  
              <div class="button-group">
                <button class="btn-save" @click="saveAuction">Save</button>
                <button class="btn-cancel" @click="cancelAuction">Cancel</button>
              </div>
            </form>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </template>
  
  <script>
  import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonItem,
    IonInput,
    IonLabel,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: {
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonItem,
      IonInput,
      IonLabel,
    },
    data() {
      return {
        isModalOpen: false,
        createdDate: '',
        startTime: '',
        endTime: '',
        venue: ''
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      saveAuction() {
        console.log('Auction saved!');
      },
      cancelAuction() {
        console.log('Oops! Auction cancelled!');
      }
    }
  });
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  #open-modal {
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 20px;
  }
  
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #0a0a0a;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
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
  }
  
  .btn-cancel {
    background-color: #f44336;
    color: white;
    border: none;
  }
  
  .ion-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .ion-content {
    --ion-background-color: transparent;
  }
  
  .ion-content.ion-padding {
    --ion-padding: 0;
  }
  </style>
  