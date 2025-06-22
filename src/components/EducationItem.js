// components/Education/EducationItem.jsx
const EducationItem = ({ item, index, isVisible }) => (
  <div
    className={`relative mb-16 flex items-start w-full transition-all duration-700 ease-out ${
      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:justify-start"
    } ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 translate-y-10 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`}`}
    style={{ transitionDelay: `${item.id * 200}ms` }}
  >
    {/* Icon */}
    <div
      className={`absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 border-4 ${item.borderColor} rounded-full flex items-center justify-center text-2xl z-10 transition-all duration-500 ${
        isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
      }`}
      style={{ transitionDelay: `${item.id * 200 + 100}ms` }}
    >
      {item.icon}
    </div>

    {/* Card */}
    <div
      className={`w-full lg:w-[calc(50%-40px)] ml-20 lg:ml-0 ${index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"} p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-left ${
        index % 2 === 1 ? "lg:text-right" : ""
      } transform transition-all duration-700 hover:shadow-xl hover:scale-105`}
    >
      <div className="text-orange-400 font-semibold text-sm mb-2">{item.date}</div>
      <h3 className="text-gray-800 dark:text-white text-xl font-bold mb-4 leading-tight">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="text-gray-800 dark:text-gray-200 font-semibold text-sm">{item.institution}</div>
    </div>
  </div>
)

export default EducationItem
