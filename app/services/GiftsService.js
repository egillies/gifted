import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js";

class GiftsService {


    async getGifts() {
        // const gifts = AppState.gifts

        const res = await api.get('api/gifts')

        console.log('got gifts', res.data);

        AppState.gifts = res.data

    }
}



export const giftsService = new GiftsService()