<template>
    <div class="form-container">
      <h2>Add Consignments Below:</h2>
      <form>
        <div class="form-group">
          <label for="grower">Grower:</label>
          <input type="text" id="grower" v-model="grower" />
        </div>
  
        <div class="form-group">
          <label for="consignment-date">Consignment Date:</label>
          <input type="date" id="consignment-date" v-model="consignmentDate" />
        </div>
  
        <div class="form-group">
          <label for="quality">Quality:</label>
          <input type="text" id="quality" v-model="quality" />
        </div>
  
        <div class="form-group">
          <label for="attempts">Attempts:</label>
          <input type="number" id="attempts" v-model="attempts" />
        </div>
  
        <div class="button-group">
          <button class="btn-save" @click="saveForm">Save</button>
          <button class="btn-cancel" @click="cancelForm">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        grower: '',
        consignmentDate: '',
        quality: '',
        attempts: null
      };
    },
    methods: {
      saveForm() { 
        console.log('Form saved!');
      },
      cancelForm() {
        console.log('Form cancelled!');
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
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
  