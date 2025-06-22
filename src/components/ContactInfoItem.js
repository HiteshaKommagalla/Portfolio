const ContactInfoItem = ({ icon, title, info, isVisible, delay }) => (
    <div
      className={`flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start transition-all duration-300 hover:translate-x-2 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 hover:bg-white/20 hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
        <p className="text-white/80 text-base">{info}</p>
      </div>
    </div>
  )
  
  export default ContactInfoItem
  