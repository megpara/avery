import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Projects() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="max-w-md font-light tracking-[1px] text-center smWrapper">
          <div className="headerTitle italic !leading-normal pb-4">
            Please stay tuned to see our latest projects!
          </div>
          Projects: Reed, Radde, Scott, Evans, ECH Office, VetWealth Office
          Remodel, Saul
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
