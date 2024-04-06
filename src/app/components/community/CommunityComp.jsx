import style from "./index.module.css"
import TitleComp from '../text/TitleComp'
import CardShort from '../cards/CardShort'

export default function CommunityComp() {
    const cardData = [
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Healthy",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        },
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Healthy",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        },
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Healthy",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        },
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Healthy",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        },
        {
            img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
            title: "Healthy",
            desc: "Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis."
        }
    ]
  return (
    <section className={style.community_sect}>
        <TitleComp
            title={"Get in Touch with Local Community"}
            desc={"Build and Grow with local community"}
            in_class={"text-center"}
        />
        <div className="cardGrid">
            {cardData.map((data, i) => (
                <CardShort
                    key={i}
                    img={data.img}
                    title={data.title}
                    desc={data.desc}
                    in_class={
                        i < 3 ? "card_short" : "" ||
                        i == 3 ? "card_big" : "" ||
                        i > 3 ? "card_med" : ""
                        }
                />
            ))}
        </div>
    </section>
  )
}
