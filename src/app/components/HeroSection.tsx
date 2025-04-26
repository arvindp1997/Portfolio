export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 h-full   text-white  flex items-center">
    

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="md:w-2/3">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Aravind Pandit
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6">
            Senior Frontend Engineer
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            Building exceptional user experiences with modern web technologies.
            Specializing in React ecosystem, frontend architecture, and UI/UX
            optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3  bg-white text-gray-700 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transform hover:-translate-y-1 transition duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent shadow-lg border-2 border-white text-white font-semibold rounded-lg  hover:bg-opacity-10 transform hover:-translate-y-1 transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
