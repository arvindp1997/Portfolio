import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Collect form values
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    
    try {
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        "service_qbpbefi", // replace with your EmailJS service ID
        "template_av33rp8", // replace with your template ID
        form, // pass the form as the form argument
        "0faV6On2qEY_gB4j9" // replace with your EmailJS user ID
      );
      
    

      alert("Message sent successfully!");
      form.reset(); // Reset form fields after submission
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message, please try again later.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 h-full">
      <div className="container mx-auto relative z-10 pt-6 pl-6 pr-6 pb-18">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-50">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-gray-200 text-lg">
            Interested in working together? Feel free to contact me by filling
            out the form below.
          </p>
        </div>

        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-md transition duration-300 text-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={formVariants}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div variants={inputVariants} custom={0}>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Name"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={1}>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="you@example.com"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={2}>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Write your message here..."
                required
              ></textarea>
            </motion.div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
