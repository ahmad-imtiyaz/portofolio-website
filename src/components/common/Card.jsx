// Reusable card component with hover effects and dark mode support
const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-lg 
        ${
          hover
            ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            : ""
        }
        ${className}
      `}
      {...props} // <- penting supaya onClick berfungsi
    >
      {children}
    </div>
  );
};

export default Card;
