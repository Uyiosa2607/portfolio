"use client";

import Header from "../header/Header";
import Footer from "../footer/Footer";
export default function AppLayout({ children }) {
  return (
    <main className="h-screen">
      <Header />
      {children}
    </main>
  );
}
