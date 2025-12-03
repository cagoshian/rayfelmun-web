"use client";
import { useScroll } from "@/components/Common/useScroll";

export default function ScrollToTop() {
  const isVisible = useScroll(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <button
        onClick={scrollToTop}
        aria-label="scroll to top"
        className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white shadow-md transition duration-300 hover:bg-opacity-80 hover:shadow-signUp"
      >
        <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
      </button>
    </div>
  );
}
