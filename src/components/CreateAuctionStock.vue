<template>
  <div class="main-container">
    <button class="open-modal-btn" @click="openModal">Create Stock</button>
    <div class="modal-overlay" :class="{ 'open': modalOpen }">
      <div class="stock-modal">
        <h2>New Stock</h2>
        <form>
          <div class="form-group">
            <label for="Registration Number">Registration Number: </label>
            <input type="number" id="number" v-model="number" class="form-input" />

          </div>
          <div class="form-group">
            <label for="Auction">Auction: </label>
            <input type="hidden" id="auction" v-model="auction" class="form-input" disabled/>
          </div>
          
          <div class="button-group">
            <button class="btn-bid" @click="Save">Save</button>
            <button class="btn-cancel" @click="cancelModal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {useStore} from '@/Store/store.ts';
import axios, { Axios } from 'axios';

export default {
  props: {
    auction_stock_id: Number,
  },
  setup(props) {
    const store = useStore();
    const modalOpen = ref(false);

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
      amount.value = null;
    };

    const Save = () => {
      const url = "http://127.0.0.1:8000/api/v1/stock/consignments/";
  

      closeModal();
    };


    const cancelModal = () => {
      closeModal();
    };

    return {
      modalOpen,
      openModal,
      closeModal,
      Save,
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
  height:30vh;
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

.bids-modal {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
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

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-bid {
  background-color: #4caf50;
  color: white;
  border: none;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-bid:hover {
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
