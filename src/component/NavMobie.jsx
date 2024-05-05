import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

export default function NavMobile(props) {
  const { item } = props;
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden z-50">
      <Hamburger color={"white"} toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-0 shadow-4xl right-0 p-5 pt-0 bg-slate-50 border-b border-b-white/20 "
          >
            <div className="flex justify-between">
              <ul className="grid gap-2">
                {item.map((x, idx) => {
                  const { title, icon, onClick } = x;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr text-slate-50"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-5 rounded-xl text-black"
                        }
                        href={onClick}
                      >
                        <span className="flex gap-1 text-lg">{title}</span>
                        {/* <Icon className="text-xl" /> */}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
