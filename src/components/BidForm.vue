<template>
  <div class="main-container">
    <button class="open-modal-btn" @click="openModal">Place Bid</button>
    <div class="modal-overlay" :class="{ 'open': modalOpen }">
      <div class="bids-modal">
        <h2>Place a bid</h2>
        <form>
          <div class="form-group">
            <label for="buyer-id">Buyer ID: {{buyerRep}}</label>
            <input type="hidden" id="buyer-id" v-model="buyerRep" class="form-input" disabled/>
          </div>

          <div class="form-group">
            <label for="auction-stock-id">Auction Stock ID: {{auctionStockId}}</label>
            <input type="hidden" id="auction-stock-id" v-model="auctionStockId" class="form-input"/>
          </div>

          <div class="form-group">
            <label for="amount">Amount: </label>
            <input type="number" id="amount" v-model="amount" class="form-input" />
          </div>

          <div class="button-group">
            <button class="btn-bid" @click="placeBid">Bid</button>
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
    const buyerRep = store.USER.user_id;
    const auctionStockId = ref(props.auction_stock_id);
    const amount = ref(null);
    console.log(props);

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
      amount.value = null;
    };

    const placeBid = () => {
      const url = "http://127.0.0.1:8000/api/v1/auction/placebid/";
      const now = new Date()
      const payload = {
        "bid_time": now,
        "amount": amount.value,
        "buyer_rep": store.USER.user_id,
        "auction_stock": auctionStockId.value
      };
      const response = axios.post(url, payload)
          .then((response) => console.log(response))

      store.AUCTION_ID = 4;
      store.ROUTER.push({ name: 'Session', replace: true });
    };


    const cancelModal = () => {
      closeModal();
    };

    return {
      modalOpen,
      buyerRep,
      auctionStockId,
      amount,
      openModal,
      closeModal,
      placeBid,
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
