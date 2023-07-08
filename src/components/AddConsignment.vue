<template>
  <ion-header>
    <ion-toolbar>
      <div class="button-container">
        <ion-button id="open-modal" expand="block" size="small" color="success" @click="openModal">Add Consignment</ion-button>
      </div>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-modal :is-open="isModalOpen" @closed="onModalClosed">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel" color="danger">Cancel</ion-button>
          </ion-buttons>
          <ion-title>New Consignment Form</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm" color="success">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="form-container">
          <h2>Add Consignments Below:</h2>
          <form>
            <div class="form-group">
              <SelectGrower />
            </div>

            <div class="form-group">
              <label for="consignment-date">Consignment Date:</label>
              <ion-input type="date" id="consignment-date" v-model="consignmentDate" class="form-input"></ion-input>
            </div>

            <div class="form-group">
              <label for="quality">Quality:</label>
              <ion-input type="text" id="quality" v-model="quality" class="form-input"></ion-input>
            </div>

            <div class="form-group">
              <label for="attempts">Attempts:</label>
              <ion-input type="number" id="attempts" v-model="attempts" class="form-input"></ion-input>
            </div>

            <div class="button-group">
              <ion-button class="btn-save" @click="saveForm">Save</ion-button>
              <ion-button class="btn-cancel" @click="cancelForm">Cancel</ion-button>
            </div>
          </form>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import SelectGrower from './SelectGrower.vue';

  export default defineComponent({
    components: {
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonInput,
      SelectGrower,
    },
    data() {
      return {
        isModalOpen: false,
        consignmentDate: '',
        quality: '',
        attempts: 0,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      cancel() {
        this.isModalOpen = false;
      },
      confirm() {
        const name = this.quality;
        this.isModalOpen = false;
        // Emit the confirm event or perform any necessary actions
      },
      saveForm() {
        // Save form logic
      },
      cancelForm() {
        // Cancel form logic
      },
      onModalClosed() {
        // Handle modal closed event
      },
    },
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
