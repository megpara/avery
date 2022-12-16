import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Projects() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="max-w-md font-light tracking-[1px] text-center">
          Please stay tuned to see our latest projects!
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
