"use client";
import React, { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Providers;
