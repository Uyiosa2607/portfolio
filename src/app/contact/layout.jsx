import Header from "@/components/header/Header";

export const metadata = {
  title: "Contact me",
  description: "Uyiosa -- Dev 😎",
};

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
