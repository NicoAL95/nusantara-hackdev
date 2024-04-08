import TitleComp from "../text/TitleComp"
import NewsHero from "./NewsHero"
import NewsSide from "./NewsSide"
import style from "./index.module.css"

export default function NewsComp() {
  return (
    <section className={style.news_sect}>
        <TitleComp
            title={"What’s Happen in Nusantara"}
            desc={"Be the first person to know about Nusantara"}
            in_class={"text-left"}
        />
        <div className={style.news_grid}>
            <NewsHero/>
            <NewsSide/>
        </div>
    </section>
  )
}
