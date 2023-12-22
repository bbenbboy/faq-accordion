import { useState } from "react";
import { motion } from "framer-motion";
import { background, iconMinus, iconPlus, iconStar } from "/src/assets";
import "./faq.scss";
import faq from "../constants";

function Faq() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="faqContainer">
      <div className="imgContainer">
        <img src={background} alt="" />
      </div>
      <motion.div
        className="textContainer"
        initial={{ x: -10, y: 5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, staggerChildren: 1 }}
      >
        <motion.div className="headContainer">
          <img src={iconStar} alt="" />
          <h1>FAQs</h1>
        </motion.div>
        {faq.map((faqs, i) => (
          <motion.div
            className="questionContainer"
            key={faqs.id}
            onClick={() => setActiveId(activeId === faqs.id ? null : faqs.id)}
            initial={{ translateX: -50, translateY: 50, opacity: 0 }}
            animate={{ translateX: 0, translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.5 }}
          >
            <div className="iconContainer">
              <h3>{faqs.question}</h3>
              <motion.img
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.6 }}
                src={activeId === faqs.id ? iconMinus : iconPlus}
                alt=""
              />
            </div>
            {activeId === faqs.id && (
              <motion.p
                initial={{ y: 5 }}
                animate={{ y: 0 }}
                className="answers"
              >
                {faqs.answer}
              </motion.p>
            )}
            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Faq;
