import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function About() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="max-w-md font-light tracking-[1px] text-center">
          <div>
            Avery Ellis graduated from Texas A&M University studying
            Construction Science and Business, then continued to get her
            master’s degree also from Texas A&M. While always having a passion
            for design, she perused it full time starting in 2021. She
            specializes in residential construction in the central Texas region
            but loves any project that welcomes creativity!
          </div>
          <div className="pt-8">
            We look forward to getting to know you and your project!
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
