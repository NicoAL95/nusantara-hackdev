import style from "./index.module.css"
import TitleComp from '../text/TitleComp'
import NewsHero from "./NewsHero"
import NewsSide from "./NewsSide"

export default function NewsPage() {
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
