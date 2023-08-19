import {defineStore} from 'pinia';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        BASE_URL: 'http://localhost:8000/api/v1/',
        USERTYPE: 'Guest',
        USER: {user_id: null, fname: null, sname: null, phone: null, utype: null},
        GROWERS: null,
        PAGES: null,
        ROUTER: null,
        AUCTION_ID: 4,
        LIVE_SESSION: {
            "auction_id": 4,
            "created_date": "2023-06-21T17:09:30Z",
            "start_time": "2023-06-23T13:30:00Z",
            "end_time": "2023-08-23T17:00:00Z",
            "venue": "Mzuzu"
        },
        AUCTION_STOCK_ID: null,
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
        getAuctionStockId: (state) => state.AUCTION_STOCK_ID,
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
        },
        setAuctionStockId(auction_stock_id: any){
            this.AUCTION_STOCK_ID = auction_stock_id
        },
    }
});