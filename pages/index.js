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
        style={{ height: "100%" }}
      >
        <Header />
        <div className={styles.main}>
          <div className={styles.subtext}>Website</div>
          <div className={styles.info}>Coming soon!</div>
        </div>
        <Footer />
      </motion.div>
    </Layout>
  );
}
