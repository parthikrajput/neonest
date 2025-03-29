import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./componets/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./componets/Footer/Footer";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    document.addEventListener("keydown", (event) => {
      if (
        event.ctrlKey &&
        (event.key === "s" ||
          event.key === "S" ||
          event.key === "u" ||
          event.key === "U" ||
          event.key === "i" ||
          event.key === "I" ||
          event.key === "j" ||
          event.key === "J")
      ) {
        event.preventDefault();
      }
      if (event.key === "F12") {
        event.preventDefault();
      }
    });

    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    if (isMobileDevice()) {
      const detectScreenshot = () => {
        document.body.classList.add("mobile-blur-screen");
        setTimeout(() => {
          document.body.classList.remove("mobile-blur-screen");
        }, 3000);
      };

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          detectScreenshot();
        }
      });
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
