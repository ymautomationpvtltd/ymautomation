import React, { useEffect, useRef } from "react";
import { createHashRouter, RouterProvider, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SideNavigation from "./components/navigation/SideNavigation";

import Hero from "./pages/Home/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

const routesOrder = ["/", "/about", "/services", "/gallery", "/contact"];

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const isCoolingDown = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      // Do not navigate on scroll if Lightbox modal is open
      if (document.querySelector(".gallery-lightbox-backdrop")) return;

      // Do not navigate on scroll if user is scrolling inside the gallery grid layout container
      const scrollableTarget = e.target.closest ? e.target.closest(".gallery-grid-layout") : null;
      if (scrollableTarget) return;

      if (isCoolingDown.current) return;
      if (Math.abs(e.deltaY) < 25) return;

      const currentIndex = routesOrder.indexOf(location.pathname);
      if (currentIndex === -1) return;

      if (e.deltaY > 0 && currentIndex < routesOrder.length - 1) {
        // Scroll DOWN -> Switch to NEXT route tab
        isCoolingDown.current = true;
        navigate(routesOrder[currentIndex + 1]);
        setTimeout(() => {
          isCoolingDown.current = false;
        }, 750);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll UP -> Switch to PREVIOUS route tab
        isCoolingDown.current = true;
        navigate(routesOrder[currentIndex - 1]);
        setTimeout(() => {
          isCoolingDown.current = false;
        }, 750);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (document.querySelector(".gallery-lightbox-backdrop")) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      // Do not navigate on touch scroll if inside the gallery grid layout container
      const scrollableTarget = e.target.closest ? e.target.closest(".gallery-grid-layout") : null;
      if (scrollableTarget) return;

      if (isCoolingDown.current) return;

      const currentIndex = routesOrder.indexOf(location.pathname);
      if (currentIndex === -1) return;

      if (diffY > 60 && currentIndex < routesOrder.length - 1) {
        // Swipe UP -> Switch to NEXT route tab
        isCoolingDown.current = true;
        navigate(routesOrder[currentIndex + 1]);
        setTimeout(() => {
          isCoolingDown.current = false;
        }, 750);
      } else if (diffY < -60 && currentIndex > 0) {
        // Swipe DOWN -> Switch to PREVIOUS route tab
        isCoolingDown.current = true;
        navigate(routesOrder[currentIndex - 1]);
        setTimeout(() => {
          isCoolingDown.current = false;
        }, 750);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="app-root-layout">
      {/* Persistent Side Navigation for ALL pages */}
      <SideNavigation />

      {/* Dynamic Page Outlet with Animated Route Transitions */}
      <AnimatePresence mode="wait">
        {outlet && React.cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
};

const router = createHashRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
