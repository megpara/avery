import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ open, toggle }) {
  const menuWidth = () => {
    if (window.innerWidth < 768) {
      return "100%";
    } else {
      return "50%";
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{
            width: menuWidth(),
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{
            width: "0%",
            opacity: 0,
            transition: { duration: 1 },
          }}
          className="fixed top-0 right-0 z-10"
          id="menu-container"
        >
          <div className="bg-[#F2EFE9] fixed top-0 md:w-1/2 w-full h-screen opacity-95">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: "2" }}
            >
              <button
                className="absolute right-0 m-10 text-lg uppercase font-thin"
                onClick={toggle}
              >
                x
              </button>
            </motion.div>
            <div className="flex flex-col h-full w-[80%] justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: "2" }}
                className="h-3/5"
              >
                <div className="menu flex h-full justify-between text-3xl text-right flex flex-col justify-evenly">
                  <Link href="/">
                    <div className="cursor-pointer">Home</div>
                  </Link>
                  <Link href="/about">
                    <div className="cursor-pointer">About</div>
                  </Link>
                  <Link href="/services">
                    <div className="cursor-pointer">Services</div>
                  </Link>
                  <Link href="/projects">
                    <div className="cursor-pointer">Projects</div>
                  </Link>
                  <Link href="/contact">
                    <div className="cursor-pointer">Contact</div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
