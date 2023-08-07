<template>
  <div class="main-container">
    <div class="create-auction-container">
      <h2>Create Auction Schedule:</h2>
      <form>
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
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      createdDate: '',
      startTime: '',
      endTime: '',
      venue: '',
    };
  },
  methods: {
    saveAuction() {
      console.log('Auction saved!');
    },
    cancelAuction() {
      console.log('Oops! Auction cancelled!');
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.create-auction-container {
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
