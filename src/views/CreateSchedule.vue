<template>
    <div class="create-auction-container">
      <h2>Create Auction Schedule:</h2>
      <form>
        <div class="form-group">
          <label for="created-date">Created Date:</label>
          <input type="datetime-local" id="created-date" v-model="createdDate" />
        </div>
  
        <div class="form-group">
          <label for="start-time">Start Time:</label>
          <input type="datetime-local" id="start-time" v-model="startTime" />
        </div>
  
        <div class="form-group">
          <label for="end-time">End Time:</label>
          <input type="datetime-local" id="end-time" v-model="endTime" />
        </div>
  
        <div class="form-group">
          <label for="venue">Venue:</label>
          <input type="text" id="venue" v-model="venue" />
        </div>
  
        <div class="button-group">
          <button class="btn-save" @click="saveAuction">Save</button>
          <button class="btn-cancel" @click="cancelAuction">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        createdDate: '',
        startTime: '',
        endTime: '',
        venue: ''
      };
    },
    methods: {
      saveAuction() {
        console.log('Auction saved!');
      },
      cancelAuction() {
        console.log('Oops Auction cancelled!');
      }
    }
  };
  </script>
  
  <style scoped>
  .create-auction-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
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
  }
  
  .btn-cancel {
    background-color: #f44336;
    color: white;
    border: none;
  }
  
  </style>
  