<template>
  <div class="main-container">
    <button class="open-modal-btn" @click="openModal">Add Bales</button>
    <ion-modal :is-open="modalOpen" @ionModalDidDismiss="closeModal" id="ion-modal">
      <div class="add-bales-form-container">
        <h2>Add Bales</h2>
        <form>
          <div class="form-group">
            <SelectConsignments />
          </div>

          <div class="form-group">
            <label for="registration-number">Registration Number:</label>
            <input type="text" id="registration-number" v-model="registrationNumber" class="form-input" />
          </div>

          <div class="form-group">
            <label for="weight">Weight:</label>
            <input type="number" id="weight" v-model="weight" class="form-input" />
          </div>

          <div class="form-group">
            <div class="checkbox-container">
              <label for="return-to-grower">Return to Grower:</label>
              <input type="checkbox" id="return-to-grower" v-model="returnToGrower" class="form-checkbox" />
            </div>
          </div>

          <div class="button-group">
            <ion-button class="btn-save" @click="saveBales">Save</ion-button>
            <ion-button class="btn-cancel" @click="cancelModal">Cancel</ion-button>
          </div>
        </form>
      </div>
    </ion-modal>
  </div>
</template>

<script>
import { IonButton, IonModal } from '@ionic/vue';
import { ref } from 'vue';
import SelectConsignments from '@/components/SelectConsignments.vue';

export default {
  components: {
    IonButton,
    IonModal,
    SelectConsignments
  },
  setup() {
    const modalOpen = ref(false);
    const registrationNumber = ref('');
    const weight = ref(null);
    const returnToGrower = ref(false);

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
      // Clear form fields
      registrationNumber.value = '';
      weight.value = null;
      returnToGrower.value = false;
    };

    const saveBales = () => {
      // TODO: Handle form submission logic
      console.log('Bales saved!');
    };

    const cancelModal = () => {
      closeModal();
    };

    return {
      modalOpen,
      registrationNumber,
      weight,
      returnToGrower,
      openModal,
      closeModal,
      saveBales,
      cancelModal
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

.add-bales-form-container {
  max-width: 400px;
  margin: 40px auto;
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
  --background: #4caf50;
  --color: white;
  --border-radius: 5px;
  --padding-start: 20px;
  --padding-end: 20px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-save:hover {
  --background: #45a049;
}

.btn-cancel {
  --background: #f44336;
  --color: white;
  --border-radius: 5px;
  --padding-start: 20px;
  --padding-end: 20px;
  transition: background-color 0.3s ease;
}

.btn-cancel:hover {
  --background: #e53935;
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
