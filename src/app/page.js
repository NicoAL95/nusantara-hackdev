import Image from "next/image";
import Layout from "./components/layout/Layout";
import WelcomeComp from "./components/welcome/WelcomeComp";
import CommunityComp from "./components/community/CommunityComp";
import TransportComp from "./components/transport/TransportComp";
import WeatherComp from "./components/weather/WeatherComp";
import NewsComp from "./components/news/NewsComp";

export default function Home() {
  return (
    <Layout>
      <WelcomeComp/>
      <WeatherComp/>
      <CommunityComp/>
      <TransportComp/>
      <NewsComp/>
    </Layout>
  );
}
