import Image from "next/image";
import Layout from "./components/layout/Layout";
import WelcomeComp from "./components/welcome/WelcomeComp";
import CommunityComp from "./components/community/CommunityComp";
import TransportComp from "./components/transport/TransportComp";

export default function Home() {
  return (
    <Layout>
      <WelcomeComp/>
      <CommunityComp/>
      <TransportComp/>
    </Layout>
  );
}
