"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      try {
        const prelineModule = await import("preline/preline");
        // Do something with the preline module if needed
      } catch (error) {
        console.error("Error loading preline module:", error);
      }
    };

    loadPreline();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
