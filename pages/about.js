import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function About() {
  return (
    <Layout>
      <Header />
      <div className="wrapper block md:flex items-center smWrapper">
        <div className="font-light tracking-[1px] text-center basis-1/2 flex flex-col items-center text-justify">
          <div className="max-w-md">
            <div className="headerTitle italic !text-8xl !leading-normal pb-4 pt-4 md:pt-0">
              Avery Ellis
            </div>{" "}
            graduated from Texas A&M University studying Construction Science
            and Business, then continued to get her master’s degree also from
            Texas A&M. While always having a passion for design, she perused it
            full time starting in 2021. She specializes in residential
            construction in the central Texas region but loves any project that
            welcomes creativity!
          </div>
          <div className="pt-8 max-w-md">
            We look forward to getting to know you and your project!
          </div>
        </div>
        <div className="basis-1/2 py-8 md:py-0">
          <img src="/headshot1.png" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
