import { useScrollAnimation } from "../hooks/useScrollAnimation"
import SectionHeader from "../components/SectionHeader"
import ContactInfoItem from "../components/ContactInfoItem"
import ContactForm from "../components/ContactForm"
import { contactMethods } from "../data/contactData"

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white transition-colors duration-500"
    >
      <div className="w-full px-4 max-w-5xl mx-auto text-center">
        <SectionHeader
          isVisible={isVisible}
          label="CONTACT"
          title="Let's Work Together"
          description="Ready to bring your ideas to life? Let's discuss your project and create something amazing together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Left: contact methods */}
          <div className="flex flex-col gap-8">
            {contactMethods.map((method, idx) => (
              <ContactInfoItem
                key={method.title}
                icon={method.icon}
                title={method.title}
                info={method.info}
                isVisible={isVisible}
                delay={600 + idx * 100}
              />
            ))}
          </div>

          {/* Right: form */}
          <ContactForm isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}

export default Contact
