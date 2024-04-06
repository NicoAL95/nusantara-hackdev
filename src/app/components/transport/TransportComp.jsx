import style from "./index.module.css"
import TitleComp from '../text/TitleComp'
import CardShort from '../cards/CardShort'

export default function TransportComp() {
    const cardData = [
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Mass Rapid Transit",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        },
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "light rail transit",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        }
    ]
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
  )
}
