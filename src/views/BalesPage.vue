<template>
    <div class="add-bales-form-container">
      <h2>Add Bales</h2>
      <form>
        <div class="form-group">
          <label for="registration-number">Registration Number:</label>
          <input type="text" id="registration-number" v-model="registrationNumber" />
        </div>
  
        <div class="form-group">
          <label for="weight">Weight:</label>
          <input type="number" id="weight" v-model="weight" />
        </div>
  
        <div class="form-group">
          <label for="return-to-grower">Return to Grower:</label>
          <input type="checkbox" id="return-to-grower" v-model="returnToGrower" />
        </div>
  
        <div class="button-group">
          <button class="btn-save" @click="saveBales">Save</button>
          <button class="btn-cancel" @click="cancelBales">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registrationNumber: '',
        weight: null,
        returnToGrower: false
      };
    },
    methods: {
      saveBales() {
        console.log('Bales saved!');
      },
      cancelBales() {
        
        console.log('Bales cancelled!');
      }
    }
  };
  </script>
  
  <style scoped>
  .add-bales-form-container {
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
  
  input[type="checkbox"] {
    margin-top: 5px;
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
  