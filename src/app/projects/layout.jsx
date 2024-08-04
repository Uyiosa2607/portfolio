import Header from "@/components/header/Header";

export const metadata = {
  title: "My Projects",
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
