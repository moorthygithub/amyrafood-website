import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
