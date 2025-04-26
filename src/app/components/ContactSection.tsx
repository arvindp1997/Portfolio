import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";

export default function ContactSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      toast.success("Message sent successfully! 🚀");
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message, please try again later.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 sm:p-6 md:p-8 min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-50">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-gray-200 text-base sm:text-lg">
            Interested in working together? Feel free to contact me by filling
            out the form below.
          </p>
        </div>

        <motion.div
          className="w-full max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 text-gray-100"
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
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Write your message here..."
                required
              ></textarea>
            </motion.div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
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
