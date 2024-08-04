import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Uyiosa -- Dev 😎",
  description: "Uyiosa -- Dev 😎",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body>{children}</body>
    </html>
  );
}
