import style from "./index.module.css"
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function HeaderComp() {
  const headerBlock = [
    {
      title: "Location",
      desc: "Get to know Nusantara Latest Location"
    },
    {
      title: "Activity",
      desc: "Get to know what happen in Nusantara"
    },
    {
      title: "transportation",
      desc: "Get to know Nusantara Public Transportation"
    },
    {
      title: "Weather",
      desc: "Get to know Nusantara Weather Condition"
    },
  ]
  return (
    <div className="w-full h-[720px] relative">
      <div className={style.overlay}></div>
      <div className={style.headerContent}>
        <div>
          <h2>The Oceanside of the country</h2>
          <h1>Nusantara Smart City</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Dui vitae purus arcu diam quis facilisis facilisis lobortis scelerisque. Platea semper a eros amet donec mi vehicula. Dis nunc aliquet quam varius quam. Orci etiam fermentum nibh sed quis sit.</p>
        </div>
        <div className={style.weather}>
          <h3>38°C Summer (Breeze)</h3>
        </div>
        <div className={style.header_blur}>
          {headerBlock.map((data, i) => (
            <div className={style.blur_block} key={i}>
              <h1>{data.title}</h1>
              <h2>{data.desc}</h2>
            </div>
          ))}
      </div>
      </div>
      <img className="w-full h-full object-cover " src="https://gardaberita.com/wp-content/uploads/2024/03/Desain-Istana-Kepresidenan-di-IKN-dan-Ikoniknya-Garuda.png" alt=""/>
    </div>
  )
}
