"use client";

import style from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function HeaderComp() {
  const headerBlock = [
    {
      title: "Location",
      desc: "Get to know Nusantara Latest Location",
    },
    {
      title: "Activity",
      desc: "Get to know what happen in Nusantara",
    },
    {
      title: "transportation",
      desc: "Get to know Nusantara Public Transportation",
    },
    {
      title: "Weather",
      desc: "Get to know Nusantara Weather Condition",
    },
  ];

  const carouels = [
    {
      link: "https://gardaberita.com/wp-content/uploads/2024/03/Desain-Istana-Kepresidenan-di-IKN-dan-Ikoniknya-Garuda.png",
    },
    {
      link: "https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?cs=srgb&dl=pexels-kai-pilger-534757.jpg&fm=jpg",
    },
    {
      link: "https://theplanetd.com/images/New-York-At-Night.jpg",
    },
  ];
  return (
    <div className="w-full h-[720px] relative">
      <div className={style.overlay}></div>
      <div className={style.headerContent}>
        <div>
          <h2>The Oceanside of the country</h2>
          <h1>Nusantara Smart City</h1>
          <p>
            Nusantara Smart City is all about using technology and community
            involvement to make cities in the archipelago more efficient,
            sustainable, and better places to live. It focuses on things like
            better managing resources, improving public services, and making
            sure everyone benefits, all while taking care of the environment and
            making sure nobody gets left behind. By working together and using
            smart solutions, Nusantara Smart City aims to create cities that
            work better for everyone
          </p>
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
      <div className={style.carousel}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          {carouels.map((carousel, i) => (
            <SwiperSlide key={i}>
              <img className={style.carousel_img} src={carousel.link} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
