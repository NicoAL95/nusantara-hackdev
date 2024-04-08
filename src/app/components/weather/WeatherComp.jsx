import style from "./index.module.css"

export default function WeatherComp() {
    
  return (
    <section className={style.weather_sect}>
        <div className={style.weather_block}>
            <div className={style.bigger}>
                <h1>18</h1>
                <span>°C</span>
            </div>
            <div className={style.long}>
                <h1>Cloudy Here</h1>
                <h2>Enjoy Your Day</h2>
            </div>
            <div className={style.long}>
                <h1>11.00 WITA</h1>
            </div>
        </div>
    </section>
  )
}
