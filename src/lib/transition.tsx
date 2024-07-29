"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Transition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsExiting(false)}>
      {!isExiting && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          onAnimationStart={() => setIsExiting(true)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
