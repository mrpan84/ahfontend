<template>
  <div class="main-container">
    <button class="open-modal-btn" @click="openModal">Add Bales</button>
    <div class="modal-overlay" :class="{ 'open': modalOpen }">
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
            <button class="btn-save" @click="saveBales">Save</button>
            <button class="btn-cancel" @click="cancelModal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SelectConsignments from '@/components/SelectConsignments.vue';

export default {
  components: {
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

.add-bales-form-container {
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
