import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <AnimatePresence>
        <motion.div
          className={styles.cover}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: "1", delay: "1" }}
        >
          <img src="/logo.png" />
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: "2", delay: "2" }}
        style="flex flex-col justify-between"
      >
        <Header />
        <div className="">
          <img
            className="absolute z-[-20] w-full h-[75vh] top-0 object-cover object-center"
            src="/index1.png"
          />
          <div className="flex flex-col justify-center items-center pt-32">
            <img className="w-[250px] z-[-10]" src="/headshot2.png" />
            <div className="max-w-lg text-center italic py-32 smWrapper">
              <div className="headerTitle !leading-normal pb-4">
                Curating a timeless and thoughtful space around your lifestyle.
              </div>
              <div className="font-light tracking-[1px] leading-relaxed">
                Our mission is to help create a welcoming environment that feels
                authentic to you.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </Layout>
  );
}
