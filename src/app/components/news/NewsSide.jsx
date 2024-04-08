import style from "./index.module.css"

export default function NewsSide() {
    const sideData = [
        {
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/19/19-Februari-2024-IKN-1712975466.jpg",
            writer: "Daniel Albarta",
            date: "October 22, 2023",
            title: "Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage’s Arctic expedition"
        },
        {
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/19/19-Februari-2024-IKN-1712975466.jpg",
            writer: "Daniel Albarta",
            date: "October 22, 2023",
            title: "Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage’s Arctic expedition"
        },
        {
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/19/19-Februari-2024-IKN-1712975466.jpg",
            writer: "Daniel Albarta",
            date: "October 22, 2023",
            title: "Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage’s Arctic expedition"
        },
        {
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/19/19-Februari-2024-IKN-1712975466.jpg",
            writer: "Daniel Albarta",
            date: "October 22, 2023",
            title: "Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage’s Arctic expedition"
        },
    ]
  return (
    <div className={style.news_side}>
        {
            sideData.map((data,i) => (
                <a href="#" className={style.news_side_link} key={i}>
                    <div className={style.news_side_img}>
                        <img src={data.image} alt=""/>
                    </div>
                    <div className={style.news_side_content}>
                        <div>
                            <h6>{data.writer}</h6>
                            <h6>|</h6>
                            <h6>{data.date}</h6>
                        </div>
                        <h1>{data.title}</h1>
                    </div>
                </a>
            ))
        }
    </div>
  )
}
