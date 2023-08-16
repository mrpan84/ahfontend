<template>
  <div class="main-container">
    <ion-button class="open-modal-btn" @click="openModal">Add Grower</ion-button>
    <ion-modal :is-open="modalOpen" @closed="closeModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Add Grower</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <form>
          <ion-item>
            <ion-label position="stacked">Club Name:</ion-label>
            <ion-input type="text" v-model="club_name"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">District:</ion-label>
            <ion-select v-model="district">
              <ion-select-option value="Balaka">Balaka</ion-select-option>
              <ion-select-option value="Blantyre">Blantyre</ion-select-option>
              <ion-select-option value="Chikwawa">Chikwawa</ion-select-option>
              <ion-select-option value="Chiradzulu">Chiradzulu</ion-select-option>
              <ion-select-option value="Chitipa">Chitipa</ion-select-option>
              <ion-select-option value="Dedza">Dedza</ion-select-option>
              <ion-select-option value="Dowa">Dowa</ion-select-option>
              <ion-select-option value="Karonga">Karonga</ion-select-option>
              <ion-select-option value="Kasungu">Kasungu</ion-select-option>
              <ion-select-option value="Likoma (Likoma Island)">Likoma (Likoma Island)</ion-select-option>
              <ion-select-option value="Lilongwe">Lilongwe</ion-select-option>
              <ion-select-option value="Machinga">Machinga</ion-select-option>
              <ion-select-option value="Mangochi">Mangochi</ion-select-option>
              <ion-select-option value="Mchinji">Mchinji</ion-select-option>
              <ion-select-option value="Mulanje">Mulanje</ion-select-option>
              <ion-select-option value="Mwanza">Mwanza</ion-select-option>
              <ion-select-option value="Mzimba">Mzimba</ion-select-option>
              <ion-select-option value="Nkhata Bay">Nkhata Bay</ion-select-option>
              <ion-select-option value="Nkhotakota">Nkhotakota</ion-select-option>
              <ion-select-option value="Nsanje">Nsanje</ion-select-option>
              <ion-select-option value="Ntcheu">Ntcheu</ion-select-option>
              <ion-select-option value="Nkhoma">Nkhoma</ion-select-option>
              <ion-select-option value="Phalombe">Phalombe</ion-select-option>
              <ion-select-option value="Rumphi">Rumphi</ion-select-option>
              <ion-select-option value="Salima">Salima</ion-select-option>
              <ion-select-option value="Thyolo">Thyolo</ion-select-option>
              <ion-select-option value="Zomba">Zomba</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Registered On:</ion-label>
            <ion-datetime display-format="YYYY-MM-DDTHH:mm" v-model="registered"></ion-datetime>
          </ion-item>

          <ion-item>
            <ion-label>Is Club:</ion-label>
            <ion-checkbox v-model="isclub"></ion-checkbox>
          </ion-item>
        </form>

        <div class="button-group">
          <ion-button class="btn-save" @click="saveGrower()" color="success">Save</ion-button>
          <ion-button class="btn-cancel" @click="cancelModal" color="danger">Cancel</ion-button>
        </div>
      </ion-content>
    </ion-modal>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { IonButton, IonCheckbox, IonDatetime, IonInput, IonItem, IonLabel, IonModal, IonSelect, IonSelectOption } from '@ionic/vue';

export default {
  components: {
    IonButton,
    IonCheckbox,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const modalOpen = ref(false);
    const isclub = ref(false);
    const club_name = ref('');
    const registered = ref();
    const district = ref('');

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
    };

    const saveGrower = () => {
      const url = "http://127.0.0.1:8000/api/v1/users/creategrower/";
      const payload = {
        "isclub": isclub.value,
        "club_name": club_name.value,
        "district": district.value,
        "registered": registered.value
      };
      const response = axios.post(url, payload)
        .then((response) => console.log(response))
    };

    const cancelModal = () => {
      closeModal();
    };

    return {
      modalOpen,
      isclub,
      club_name,
      district,
      registered,
      openModal,
      closeModal,
      saveGrower,
      cancelModal,
    };
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.open-modal-btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn-save {
  margin-right: 10px;
}
</style>
