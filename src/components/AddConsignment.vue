<template>
  <ion-header>
    <ion-toolbar>
      <div class="button-container">
        <ion-button id="open-modal" expand="block" size="small" color="success" @click="openModal">Add Consignment</ion-button>
      </div>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-modal :is-open="isModalOpen" @ionModalDidDismiss="closeModal">

      <ion-content class="ion-padding">
        <div class="modal-overlay" :class="{ 'open': isModalOpen }">
          <div class="add-consignment-form-container">
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
      this.cancel();
    },
    closeModal() {
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.add-consignment-form-container {
  max-width: 400px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.add-consignment-form-container h2 {
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
</style>