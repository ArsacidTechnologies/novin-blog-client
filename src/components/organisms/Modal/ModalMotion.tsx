"use client"

import { motion, AnimatePresence } from "framer-motion";
import React, { MouseEventHandler } from "react";
import FocusLock from "react-focus-lock";
import { useDetectClickOutside } from 'react-detect-click-outside';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const ModalMotion: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const ref = useDetectClickOutside({ onTriggered: onClose });

  // Define the animation variants for the modal window
  // const modalVariants = {
  //   hidden: {
  //     y: "-100vh",
  //     opacity: 0,
  //   },
  //   animate: {
  //     y: "0",
  //     opacity: 1,
  //     transition: {
  //       duration: 0.3,
  //       type: "spring",
  //       damping: 25,
  //       stiffness: 500,
  //     },
  //   },
  //   exit: {
  //     y: "100vh",
  //     opacity: 0,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          // onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 flex justify-center items-center "
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FocusLock>
              <div className="dropdown" ref={ref}>
                {children}
              </div>
            </FocusLock>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMotion;
