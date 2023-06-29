import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawGifts() {

    const gifts = AppState.gifts

    let template = ''

    gifts.forEach(g => template += g.template)

    setHTML('myGifts', template)
}

// const gifts = 


export class GiftsController {
    constructor() {
        console.log('gifts controller loaded')
        this.getGifts()
    }

    async getGifts() {

        try {
            await giftsService.getGifts()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}