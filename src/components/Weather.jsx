import { useState} from "react"
import { kelvinToCelsius, kelvinToFahrenheit} from "../utils/temp.js"

const weatherImages = {
    "01d": "/images/sol.png",
    "02d": "/images/nube-sol.png",
    "03d": "/images/nube.png",
    "04d": "/images/nubesBG.png",
    "09d": "/images/nube-gotas.png",
    "10d": "/images/nube-g-sol.png",
    "11d": "/images/nube-trueno.png",
    "13d": "/images/nieve.png",
    "50d": "/images/nube-rayas.png"
}

const BackgroundWeather  = {  "01": "/fondos/sol.jpg",
    "02d": "/fondos/nube-sol.jpg",
    "03d": "/fondos/nube.jpg",
    "04d": "/fondos/dos-nubes.jpg",
    "09d": "/fondos/nube-gotas.gif",
    "10d": "/fondos/nube-g-sol.jpg",
    "11d": "/fondos/nube-trueno.jpg",
    "13d": "/fondos/nieve.jpg",
    "50d": "/fondos/nube-rayas.jpg"}


const Weather = ({weatherInfo}) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }

    const useBackground = () => {
        return backgroundWeather[weatherInfo?.weather[0].icon]
    }

return (
    <section className="text-center grid gap-6">




        <h2 className=" font-bold text-2xl">{weatherInfo?.name} {weatherInfo?.sys.country}</h2>

        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

            {/*seccion arriba */}
            <article className="bg-white/70 p-4 py-5 rounded-3xl grid grid-cols-2 items-center">

                <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

                <span className="text-5xl">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

                <div>
                    <img className=" p-4 py-2 w-100 h-100" src={weatherImages[weatherInfo?.weather[0].icon]} alt="" />
                </div>

                </article>

                {/*seccion abajo*/}
                <section className="bg-white/70 p-1 py-4 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">
                    <article className="flex gap-2 p-2 sm:items-center">
                        <div>
                            <img src="/images/viento.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}m/s</span>
                                
                    </article>

                    <article className="flex gap-2 p-2 sm:items-center">
                    <div>
                            <img className="p-1" src="/images/gotas.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-1 p-2 sm:items-center">
                    <div>
                        <img src="/images/flechas.png" alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure}hPa</span>
                </article>

            </section>
        </section>

        <section>
        <button className="bg-white/20 p-4 py-2 rounded-2xl " onClick={handleChangeTemp}> Change F/C</button>
        </section>


    </section>
)

}
export default Weather