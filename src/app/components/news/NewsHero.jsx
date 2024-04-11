import style from "./index.module.css";

export default function NewsHero() {
  return (
    <div className={style.news_hero}>
      <a href="#" className={style.news_hero_link}>
        <div className={style.news_hero_content}>
          <div>
            <h1>
              President Joko widodo visit IKN for the first time in Indonesia
              History
            </h1>
            <p>
              President Joko “Jokowi” Widodo on Wednesday (02/22) around 12.48
              p.m. Central Indonesian Time (WITA) arrived at Sultan Aji Muhammad
              Sulaiman Sepinggan International Airport in Balikpapan city, East
              Kalimantan province. Upon arrival, Commander of the Indonesian
              National Defense Forces Adm. Yudo Margono, Indonesian National
              Police Chief Listyo Sigit Prabowo, and Governor of East Kalimantan
              province Isran Noor welcomed the President and First Lady Iriana
              Joko Widodo at the airport.
            </p>
          </div>
          <div className={style.news_hero_bottom}>
            <h6>Daniel Albarta</h6>
            <h6>|</h6>
            <h6>October 22, 2023</h6>
          </div>
        </div>
        <div className={style.news_hero_img}>
          <img
            className="w-full h-full object-cover"
            src="https://setkab.go.id/wp-content/uploads/2023/02/president-kicks-off-working-visist.jpg"
            alt=""
          />
        </div>
      </a>
    </div>
  );
}
