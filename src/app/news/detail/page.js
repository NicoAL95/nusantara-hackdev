import Layout from "@/app/components/layout/Layout";
import style from "./index.module.css"
import TitleComp from "@/app/components/text/TitleComp";

export default function Home() {
  return (
    <Layout>
      <section className={style.news_detail}>
      <TitleComp
            title={"What’s Happen in Nusantara"}
            desc={"Daniel Jones | October 22, 2023"}
            in_class={"text-left"}
        />
        <div className={style.news_detail_content}>
            <div className={style.news_detail_content_img}>
                <img src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt=""/>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut libero, magnam, molestias quaerat optio dolor fuga accusamus, ipsum ducimus saepe illo excepturi alias neque labore blanditiis commodi vel consequuntur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut libero, magnam, molestias quaerat optio dolor fuga accusamus, ipsum ducimus saepe illo excepturi alias neque labore blanditiis commodi vel consequuntur.</p>
            </div>
        </div>
      </section>
    </Layout>
  );
}
