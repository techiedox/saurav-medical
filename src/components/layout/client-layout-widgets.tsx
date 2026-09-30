"use client";

import React, { useEffect, useState } from "react";
import { BottomNav } from "./bottom-nav";
import { ScrollToTop } from "./scroll-to-top";

export function ClientLayoutWidgets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <BottomNav />
      <ScrollToTop />
    </>
  );
}
