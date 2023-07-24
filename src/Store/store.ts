import {defineStore} from 'pinia';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        BASE_URL: 'http://localhost:8000/api/v1/',
        USERTYPE: 'Auctioneer',
        USER: "Jeremiah",
        GROWERS: null,
        PAGES: null,
    }),
    getter: {
        getBaseUrl: (state) => state.BASE_URL,
        getUserType: (state) => state.USERTYPE,
        getUser: (state) => state.USER,
        getGrowers: (state) => state.GROWERS,
        getPagess: (state) => state.PAGES,
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
        setPages(pages:any){
            this.PAGES = pages
        },
    }
});