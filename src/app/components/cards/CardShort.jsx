import style from "./index.module.css"

export default function CardShort({img, title, desc, in_class}) {
  return (
    <a href="#" className={`${style.card} ${in_class}`}>
        <div className={style.card_img}>
            <div className={style.card_overlay}></div>
            <img src={img} alt=""/>
        </div>
        <div className={style.card_desc}>
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </div>
    </a>
  )
}
