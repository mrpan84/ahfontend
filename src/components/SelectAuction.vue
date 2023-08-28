<template>
  <ion-list>
    <ion-item>
      <ion-select>
        <div slot="label">Grower <ion-text color="danger">(Required)</ion-text></div>
        <ion-select-option v-for="auction in auctions" :value="auction.auction_id">
          {{auction.venue}} {{ auction.start_time }}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import axios, { Axios } from 'axios';
import {useStore} from '@/Store/store.ts'

export default defineComponent({
  components: { IonItem, IonList, IonSelect, IonSelectOption, IonText },
  setup(){
    const store = useStore();
    const auctions = ref();
    const loadAuctions = async () => {
      const response = await axios.get(store.BASE_URL + "auction/auctions/");
      auctions.value = response.data;
      //store.setGrowers(response.data);
    }

    loadAuctions();
    return {auctions};
  }
});
</script>

