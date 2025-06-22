// components/Education/EducationTimeline.jsx
import EducationItem from "./EducationItem"

const EducationTimeline = ({ refProp, items, visibleItems }) => (
  <div ref={refProp} className="relative max-w-3xl mx-auto py-8">
    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 border-l-2 border-dashed border-gray-400 dark:border-gray-500 transform -translate-x-1/2 hidden lg:block"></div>
    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 border-l-2 border-dashed border-gray-400 dark:border-gray-500 lg:hidden"></div>

    {items.map((item, index) => (
      <EducationItem key={item.id} item={item} index={index} isVisible={visibleItems.has(item.id)} />
    ))}
  </div>
)

export default EducationTimeline
