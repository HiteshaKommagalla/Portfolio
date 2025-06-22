// src/components/Hero/MotionBackground.jsx
const MotionBackground = ({ x, y }) => {
    return (
      <div
        className="absolute inset-0 opacity-30"
        style={{ transform: `translate(${x * 0.02}px, ${y * 0.02}px)` }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse-slow" />
        <div
          className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>
    );
  };
  
  export default MotionBackground;
  