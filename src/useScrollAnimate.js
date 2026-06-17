import { useEffect } from "react";

/**
 * useScrollAnimate
 * Watches all [data-animate] elements and adds class "visible"
 * when they enter the viewport.
 *
 * Usage on any element:
 *   <div data-animate="fade-up" data-delay="100"> ... </div>
 *
 * Supported animations: fade-up | fade-left | fade-right | fade-in
 * data-delay: milliseconds (optional, e.g. "0", "100", "200", "300")
 */
export default function useScrollAnimate() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Number(el.dataset.delay) || 0;
            setTimeout(() => {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}