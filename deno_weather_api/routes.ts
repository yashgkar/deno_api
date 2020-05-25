import { getWeather } from "https://deno.land/x/deno_weather/mod.ts";
import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/', ({ response }: { response: any }) => {
    response.body = 'Hello!\nUse /:cityname/:countrycode \nto get a json object of the location weather information'
})

router.post('/:city/:country', async ({ params, response }: { params: { city: string, country: string }, response: any }) => {
    const city = params.city
    const country = params.country

    if (!city || !country) {
        response.status = 404
        response.body = {
            success: false,
            data: 'City or country code not correctly added'
        }
    } else {
        const weather = await getWeather(city, country)
        response.status = 200
        response.body = {
            success: true,
            data: weather
        }
    }


})

export default router