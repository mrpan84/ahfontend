import {defineStore} from 'pinia';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        BASE_URL: 'http://192.168.169.167:8000/api/v1/',
        USERTYPE: 'Auctioneer',
        USER: "Jeremiah",
        GROWERS: null,
    }),
    getter: {
        getBaseUrl: (state) => state.BASE_URL,
        getUserType: (state) => state.USERTYPE,
        getUser: (state) => state.USER,
        getGrowers: (state) => state.GROWERS,
    },
    actions: {
        setBaseUrl(url:string){
            this.BASE_URL = url
            },
        setUserType(ut:string){
            this.USERTYPE = ut
            },
        setUser(user:any){
            this.USER = user
            },
        setGrowers(growers:any){
            this.GROWERS = growers
            },
    }
});