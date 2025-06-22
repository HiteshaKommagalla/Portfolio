const TextAreaField = ({ name, placeholder, rows = 5, isVisible, delay }) => (
    <div className="w-full">
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        required
        className={`w-full p-4 border-none rounded-lg bg-white/10 text-white text-base backdrop-blur-lg border border-white/20 placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 resize-none ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      ></textarea>
    </div>
  )
  
  export default TextAreaField
  