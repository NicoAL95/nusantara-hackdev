import style from "./index.module.css";
import TitleComp from "../text/TitleComp";
import CardShort from "../cards/CardShort";

export default function TransportComp() {
  const cardData = [
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Mass Rapid Transit",
      desc: "Zoom through the city hassle-free with Mass Rapid Transit (MRT)! Say goodbye to traffic jams and hello to smooth, speedy commutes. Affordable, comfortable, and eco-friendly – it's the smart way to get around town!",
    },
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "light rail transit",
      desc: "Discover the ease of Light Rail Transit (LRT) – your ticket to seamless urban travel! Glide through the city with swift, stress-free journeys. Affordable, convenient, and eco-conscious – LRT keeps you moving forward, effortlessly.",
    },
  ];
  return (
    <section className={style.transport_sect}>
      <TitleComp
        title={"Nusantara Transportation"}
        desc={"Get to know Nusantara Transportations Schedules"}
        in_class={"text-left"}
      />
      <div className="cardGrid">
        {cardData.map((data, i) => (
          <CardShort
            key={i}
            img={data.img}
            title={data.title}
            desc={data.desc}
            in_class={"card_semi"}
          />
        ))}
      </div>
    </section>
  );
}
