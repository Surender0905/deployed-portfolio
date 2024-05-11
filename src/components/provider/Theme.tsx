"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Theming({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
export default Theming;
