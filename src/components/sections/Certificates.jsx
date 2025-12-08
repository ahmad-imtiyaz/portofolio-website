import { useState, useEffect } from "react";
import { certificates } from "../../data/certificates";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  // Carousel positioning
  const getPos = (index) => {
    const total = certificates.length;
    let pos = index - current;
    if (pos < 0) pos += total;
    return pos;
  };

  const getX = (pos) => {
    const offset = isMobile ? 160 : 240; // Slightly reduced spacing
    if (pos === 0) return 0;
    if (pos === 1) return offset;
    if (pos === certificates.length - 1) return -offset;
    return 0;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certificates"
          subtitle="Showcase of my achievements and skills"
        />

        {/* Carousel Container */}
        <div className="relative w-full flex items-center justify-center mt-10">
          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-10 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:scale-110 transition z-40"
          >
            <ChevronLeft />
          </button>

          {/* Card Wrapper */}
          <div className="relative w-full flex items-center justify-center h-[220px] sm:h-[280px] overflow-hidden">
            {certificates.map((item, index) => {
              const pos = getPos(index);
              const isActive = pos === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  className="absolute w-[190px] sm:w-[260px] cursor-pointer"
                  animate={{
                    x: getX(pos),
                    scale: isActive ? 1.08 : 0.88,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 50 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onClick={() => setSelected(item)}
                >
                  {/* Card with border/background wrapper */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 h-[110px] sm:h-[160px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title only - centered and contained */}
                    <div className="text-center mt-3 select-none px-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-10 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:scale-110 transition z-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selected.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
              {selected.description}
            </p>

            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[500px] sm:max-h-[600px] w-full object-contain rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
