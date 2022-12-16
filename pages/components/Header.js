import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex p-7 items-center border-b-[0.5px] border-black">
      <div className="basis-1/6">
        <Link href="/">
          <img className="h-[60px] cursor-pointer z-10" src="/logo.png" />
        </Link>
      </div>
      <div className="basis-4/6">
        <Link href="/">
          <div className="headerTitle z-10 cursor-pointer">
            Avery Ellis Interiors
          </div>
        </Link>
      </div>
      <div className="flex justify-end basis-1/6">
        {!menuOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: "1" }}
              className="z-10 flex"
            >
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <div className="group flex flex-col justify-around h-[25px] w-[35px] items-end">
                  <span className="h-[1px] w-full bg-black" />
                  <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-black" />
                  <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-black" />
                </div>
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <Menu open={menuOpen} toggle={toggleMenu} />
    </div>
  );
}
