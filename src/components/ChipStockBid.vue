<template>
  <ion-chip v-for="(bid, index) in bids" >
    <ion-icon v-if="index == 0" :icon="trophy" color="success"></ion-icon>
    <ion-label>{{bid.company}} </ion-label>
    <ion-label> ${{bid.amount}}</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>
</template>

<script lang="ts">
import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
import { close, closeCircle, pin, trophy } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import axios, { Axios } from 'axios';
import {useStore} from '@/Store/store.ts';

export default defineComponent({
  components: { IonChip, IonAvatar, IonLabel, IonIcon },
  props: {
    auction_stock_id: Number,
  },
  setup(props) {
    const bids = ref();
    const store = useStore();

    const loadBids = async () => {
      const response = await axios.get(store.BASE_URL + "auction/bids_by_stock_id/" + props.auction_stock_id + "/");
      bids.value = response.data;
      console.log("a call")
    }

    setInterval(loadBids, 5000);

    return {close, closeCircle, pin, trophy, bids, };
  },
});
</script>