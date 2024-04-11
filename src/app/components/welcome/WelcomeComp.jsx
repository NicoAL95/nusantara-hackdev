import TitleComp from "../text/TitleComp";
import ArrowDown from "./ArrowDown";
import style from "./index.module.css";

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
        <h1>
          Welcome to Nusantara Smart City, where innovation meets community!
          Step into a world where technology and collaboration are transforming
          our cities into vibrant hubs of sustainability, efficiency, and
          inclusivity. Join us on this journey as we work together to create
          smarter, greener, and more connected communities for all.
        </h1>
      </div>
      <div className={style.welcome_more}>
        <h6>Learn more</h6>
        <a href="#">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
}
