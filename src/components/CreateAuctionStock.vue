<template>
  <div class="main-container">
    <button class="open-modal-btn" @click="openModal">Create Stock</button>
    <div class="modal-overlay" :class="{ 'open': modalOpen }">
      <div class="stock-modal">
        <h2>New Stock</h2>
        <form>

          <div class="form-group">
            <label for="Auction">Auction: {{ store.AUCTION_ID }} </label>
            <input type="hidden" id="auction" v-model="auction" class="form-input" disabled/>
          </div>

          <div class="form-group">
            <ion-select label="Stock" label-placement="Stock" v-model="reg_number">
              <ion-select-option v-for="consignment in consignments" :value="consignment.reg_number">
                {{consignment.grower}} {{ consignment.reg_number }}
              </ion-select-option>
            </ion-select>
          </div>

          <div class="button-group">
            <button class="btn-bid" @click="save">Save</button>
            <button class="btn-cancel" @click="cancelModal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from '@/Store/store.ts';
import axios from 'axios';

export default {
  props: {
    auction_id: Number,
  },
  setup(props) {
    const store = useStore();
    const modalOpen = ref(false);
    const reg_number = ref(0);
    const auction = ref(store.AUCTION_ID);

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
    };

    const save = async () => {
      const url = "http://127.0.0.1:8000/api/v1/auction/createauctionstock/";
      const payload = {
        "reg_number": reg_number.value,
        "auction": auction.value,
      };
      console.log(payload);
      try {
        const response = await axios.post(url, payload);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
      closeModal();
    };

    const cancelModal = () => {
      closeModal();
    };

    const consignments = ref([]);
    const auctions = ref([]);

    const loadConsignments = async () => {
      try {
        const response = await axios.get(store.BASE_URL + "stock/growerconsignmentsunscheduled/");
        consignments.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const loadAuctions = async () => {
      try {
        const response = await axios.get(store.BASE_URL + "auction/auctions/");
        auctions.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      loadConsignments();
      loadAuctions();
    });

    return {
      modalOpen,
      openModal,
      closeModal,
      save,
      cancelModal,
      reg_number,
      auction,
      consignments,
      auctions,
      store,
    };
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height:15vh;
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
