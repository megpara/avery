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
      >
        <Header />
        <div className="bg-[#d6cec4]">
          <div className="headerTitle !text-lg !leading-normal py-4 border-b-[0.5px] border-black w-full !italic">
            Curating a timeless and thoughtful space around your lifestyle.
          </div>
          <div className="block md:flex items-center smWrapper">
            <div className="py-8 md:py-0 flex flex-col items-center">
              <img src="/headshot2.png" />
            </div>
            <div className="font-light tracking-[1px] text-center flex-1 flex flex-col items-center text-center">
              <div className="max-w-md pb-16 md:pb-0">
                <div className="headerTitle italic !text-7xl !leading-normal pb-4 pt-4 md:pt-0">
                  Our Mission
                </div>{" "}
                is to help create a welcoming environment that feels authentic
                to you.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </Layout>
  );
}
