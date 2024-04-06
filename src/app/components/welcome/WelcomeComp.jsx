import TitleComp from "../text/TitleComp"
import ArrowDown from "./ArrowDown"
import style from "./index.module.css"

export default function WelcomeComp() {
  return (
    <section className={style.welcome_sect}>
        <div>
            <TitleComp
                title={"Welcome to Nusantara"}
                desc={"Where Technology Connect with Our Future"}
                in_class={"text-center"}
            />
        </div>
        <div className={style.welcome_desc}>
            <h1>Lorem ipsum dolor sit amet consectetur. Pharetra adipiscing commodo leo vestibulum lobortis arcu imperdiet nulla. Fames ipsum consectetur in ut faucibus. Iaculis non rutrum commodo venenatis.</h1>
        </div>
        <div className={style.welcome_more}>
            <h6>Learn more</h6>
            <a href="#">
                <ArrowDown/>
            </a>
        </div>
    </section>
  )
}
