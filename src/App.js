import { motion, useScroll } from "framer-motion";
import "./App.css";
import Main from "./Screen";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primary-text origin-top-left text-start z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="App h-full w-full flex flex-col justify-center items-center">
        <Main />
      </div>
    </>
  );
}

export default App;
