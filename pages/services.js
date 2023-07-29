import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Services() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="max-w-lg font-light tracking-[1px] text-justify smWrapper">
          <div className="headerTitle italic !text-6xl !leading-normal pb-4">
            Avery Ellis Interiors
          </div>{" "}
          offers a variety of services depending on the project and clients’
          needs. Anywhere from helping you find your “style” and curating a look
          book, to full scope that is there for every step of the process.{" "}
          <a href="/contact" className="underline underline-offset-4">
            Inquire
          </a>{" "}
          to find out more!
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
