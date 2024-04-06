import style from "./index.module.css"

export default function TitleComp({title, desc, in_class}) {
  return (
    <div className={`${style.title_comp} ${in_class}`}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
    </div>
  )
}
