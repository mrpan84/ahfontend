import {defineStore} from 'pinia';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        BASE_URL: 'http://localhost:8000/api/v1/',
        USERTYPE: 'Guest',
        USER: "",
        GROWERS: null,
        PAGES: null,
        ROUTER: null,
        AUCTION_ID,
        LIVE_SESSION,
    }),
    getter: {
        getBaseUrl: (state) => state.BASE_URL,
        getUserType: (state) => state.USERTYPE,
        getUser: (state) => state.USER,
        getGrowers: (state) => state.GROWERS,
        getPagess: (state) => state.PAGES,
        getRouter: (state) => state.ROUTER,
        getAuctionId: (state) => state.AUCTION_ID,
        getLiveSession: (state) => state.LIVE_SESSION,
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
        setRouter(router:any){
            this.ROUTER = router
        },
        setAuctionId(auction_id: int){
            this.AUCTION_ID = auction_id
        },
        setLiveSession(live_session: any){
            this.LIVE_SESSION = live_session
        }
    }
});