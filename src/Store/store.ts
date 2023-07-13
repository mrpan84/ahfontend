import {defineStore} from 'pinia';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        USERTYPE: 'Auctioneer',

    }),
    getter: {
        getUserType: (state) => state.USERTYPE,
    },
    actions: {
        setUserType(ut:string){
            this.USERTYPE = ut
            },
    }
})
