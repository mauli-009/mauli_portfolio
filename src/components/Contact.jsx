import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import RightContentWrapper from "./RightContentWrapper";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="w-full px-6 py-16 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <RightContentWrapper><h2 className="text-3xl font-bold mb-6">Contact Me</h2></RightContentWrapper>
        
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-[#1a1a1a] p-6 rounded-xl border border-gray-700 shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="bg-black/30 border border-gray-600 p-3 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4f46e5]"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="bg-black/30 border border-gray-600 p-3 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4f46e5]"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="bg-black/30 border border-gray-600 p-3 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4f46e5]"
        />

        <button
          type="submit"
          className="mt-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>

        {done && (
          <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>
        )}
      </form>
     
    </motion.div>
  );
};

export default Contact;
