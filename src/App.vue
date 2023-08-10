<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <Navigation v-if="store.USERTYPE != 'Guest'"></Navigation>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonNote, IonRouterOutlet, IonSplitPane,} from '@ionic/vue';
import { ref, watch } from 'vue';
import {  hammerOutline, readerOutline, readerSharp, settingsOutline, settingsSharp,  hammerSharp, homeOutline,  homeSharp} from 'ionicons/icons';
import { auctioneerPages, buyerPages, farmerPages, adminPages, guestPages } from '@/JS/';
import { useRouter } from 'vue-router';
import { useStore } from '@/Store/store.ts';
import Navigation from '@/components/Navigation.vue';


const store = useStore();
store.ROUTER = useRouter();
console.log(store.USERTYPE);

const USERTYPE = ref(store.USERTYPE);
const USER = ref();
const navComponent = ref('');
const selectedIndex = ref(0);
let appPages = [
  {
    title: 'Dashboard',
    url: '/folder/Dashboard',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Categories',
    url: '/folder/Categories',
    iosIcon: readerOutline,
    mdIcon: readerSharp,
  },
  {
    title: 'Bids',
    url: '/folder/Bids',
    iosIcon: hammerOutline,
    mdIcon: hammerSharp,
  },
  {
    title: 'Settings',
    url: '/folder/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
  },
];

const labels = ['Signout'];

switch (USERTYPE.value) {
  case 'Farmer':
    appPages = farmerPages;
    break;
  case 'Buyer':
    appPages = buyerPages;
    break;
  case 'Auctioneer':
    appPages = auctioneerPages;
    break;
  case 'Admin':
    appPages = adminPages;
    break;
  default:
    appPages = guestPages;
    break;
}

watch(store.USERTYPE, (newValue, oldValue) => {
  console.log('Name changed from', oldValue, 'to', newValue)
})
const loadNav = () => {
  console.log("we're here...");
  navComponent.value = 'Navigation';
}

watch(store.USERTYPE, async (newUT) => {
  if (newUT === 'Guest') {
    loadNav();
    store.ROUTER.push({ name: 'Signin', replace: true });
  } else {
    switch (newUT) {
      case 'Farmer':
        appPages = farmerPages;
        loadNav();
        USERTYPE.value = store.USERTYPE;
        break;
      case 'Buyer':
        appPages = buyerPages;
        loadNav();
        USERTYPE.value = store.USERTYPE;
        break;
      case 'Auctioneer':
        appPages = auctioneerPages;
        loadNav();
        USERTYPE.value = store.USERTYPE;
        break;
      case 'Admin':
        appPages = adminPages;
        loadNav();
        USERTYPE.value = store.USERTYPE;
        break;
      default:
        appPages = guestPages;
        loadNav();
        USERTYPE.value = store.USERTYPE;
        break;
    }
  }
});

// const path = window.location.pathname.split('folder/')[1];
// if (path !== undefined) {
//   selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
// }
</script>

`<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.label-wrapper {
  display: flex;
  align-items: center;
}
</style>
`