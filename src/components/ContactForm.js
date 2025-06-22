import { useRef } from "react"
import InputField from "./InputField"
import TextAreaField from "./TextAreaField"
import { formFields } from "../data/contactData"

const ContactForm = ({ isVisible }) => {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Delay submission until after alert completes
    alert("Thank you for your message! I’ll get back to you soon.")

    // Let the alert fully finish before submitting
    setTimeout(() => {
      formRef.current.submit()
    }, 100)
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0"
    >
      {/* Web3Forms Access Key */}
      <input
        type="hidden"
        name="access_key"
        value="9a9470a7-97a1-4fb7-91c6-7cc458824657"
      />

      {/* Optional - email subject line */}
      <input type="hidden" name="subject" value="New Contact Form Message" />

      {formFields.map((field, idx) => (
        <InputField
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          isVisible={isVisible}
          delay={800 + idx * 100}
        />
      ))}

      <TextAreaField
        name="message"
        placeholder="Your Message"
        rows={5}
        isVisible={isVisible}
        delay={800 + formFields.length * 100}
      />

      <button
        type="submit"
        className={`
          bg-gradient-to-r from-orange-400 to-red-400 text-white border-none
          px-8 py-4 rounded-full font-semibold cursor-pointer text-base
          inline-flex items-center justify-center gap-2 transition-all duration-300
          self-center lg:self-start
          hover:-translate-y-1 hover:shadow-lg hover:scale-105
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
        `}
        style={{ transitionDelay: `${800 + (formFields.length + 1) * 100}ms` }}
      >
        Send Message <span className="text-lg">→</span>
      </button>
    </form>
  )
}

export default ContactForm
