"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function LoaderOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleLoad = async () => {
      try {
        const response = await fetch("/lottie/loader.json");
        const data = await response.json();
        setAnimationData(data);
      } catch {
        setAnimationData(null);
      }

      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {prefersReducedMotion ? (
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary/40 border-t-primary" />
          ) : (
            <div className="h-36 w-36">
              {animationData ? (
                <Lottie animationData={animationData} loop />
              ) : (
                <div className="h-full w-full animate-pulse rounded-full border border-primary/40" />
              )}
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
