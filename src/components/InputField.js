const InputField = ({ type, name, placeholder, isVisible, delay }) => (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className={`w-full p-4 border-none rounded-lg bg-white/10 text-white text-base backdrop-blur-lg border border-white/20 placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      />
    </div>
  )
  
  export default InputField
  