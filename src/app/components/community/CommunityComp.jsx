import style from "./index.module.css";
import TitleComp from "../text/TitleComp";
import CardShort from "../cards/CardShort";

export default function CommunityComp() {
  const cardData = [
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Community Surveys",
      desc: "Conduct periodic surveys to gather feedback and insights from residents regarding their priorities, concerns, and suggestions for improving smart city initiatives, ensuring that their voices are heard and considered in decision-making processes.",
    },
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Volunteer Programs",
      desc: "Establish volunteer programs that allow community members to contribute their time and skills to support smart city projects, whether through data collection, community outreach, or educational initiatives.",
    },
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Interactive Workshops",
      desc: "Organize interactive workshops and training sessions on topics such as digital literacy, sustainability practices, and civic engagement, empowering residents with the knowledge and tools they need to actively participate in shaping their smart city.",
    },
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Public Demonstrations",
      desc: "Host public demonstrations and showcases of smart city technologies and solutions in accessible locations within the community, giving residents the opportunity to see firsthand how these innovations can benefit their daily lives.",
    },
    {
      img: "https://asset.kompas.com/crop/0x0:0x0/720x360/data/photo/2022/02/10/620534fd231a5.jpg",
      title: "Community Contests",
      desc: "Launch contests or challenges that encourage residents to propose innovative ideas or solutions for specific smart city challenges, with opportunities for recognition, rewards, or funding for winning submissions, fostering creativity and engagement within the community.",
    },
  ];
  return (
    <section className={style.community_sect}>
      <TitleComp
        title={"Get in Touch with Local Community"}
        desc={"Build and Grow with local community"}
        in_class={"text-center"}
      />
      <div className="cardGrid">
        {cardData.map((data, i) => (
          <CardShort
            key={i}
            img={data.img}
            title={data.title}
            desc={data.desc}
            in_class={
              i < 3
                ? "card_short"
                : "" || i == 3
                ? "card_big"
                : "" || i > 3
                ? "card_med"
                : ""
            }
          />
        ))}
      </div>
    </section>
  );
}
