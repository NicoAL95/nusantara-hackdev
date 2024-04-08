import Image from "next/image";
import Layout from "../components/layout/Layout";
import NewsPage from "../components/news/NewsPage";

export default function Home() {
  return (
    <Layout>
      <NewsPage/>
    </Layout>
  );
}
