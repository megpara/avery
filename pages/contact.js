import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex justify-center w-full smWrapper">
        <ContactForm />
      </div>
      <Footer />
    </Layout>
  );
}
