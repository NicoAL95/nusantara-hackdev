import style from "./index.module.css"

export default function NewsHero() {
  return (
    <div className={style.news_hero}>
        <a href="#" className={style.news_hero_link}>
            <div className={style.news_hero_content}>
                <div>
                    <h1>
                        President Joko widodo visit IKN for the first time in Indonesia History
                    </h1>
                    <p>
                        On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month stay.
                    </p>
                </div>
                <div className={style.news_hero_bottom}>
                    <h6>Daniel Albarta</h6>
                    <h6>|</h6>
                    <h6>October 22, 2023</h6>
                </div>
            </div>
            <div className={style.news_hero_img}>
                <img className="w-full h-full object-cover" src="https://awsimages.detik.net.id/community/media/visual/2023/12/21/jokowi-groundbreaking-polres-khusus-ikn-1_169.jpeg?w=1200" alt=""/>
            </div>
        </a>
    </div>
  )
}
