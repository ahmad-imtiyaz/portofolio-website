import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // tangkap route saat ini

  useEffect(() => {
    window.scrollTo({
      top: 0, // scroll ke paling atas
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]); // dijalankan setiap route berubah

  return null; // komponen ini tidak render apa-apa
};

export default ScrollToTop;
