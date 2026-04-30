import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1b1d2b] to-[#3a3d63]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi,<br />
            I’m Victor,<br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          <p className="mt-4 text-gray-300">
            Front End Developer / React / Next.js
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-purple-500 px-6 py-3 rounded-xl font-semibold">
              My Work
            </button>
            <button className="border border-purple-400 px-6 py-3 rounded-xl">
              Hire Me
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-72 h-96 bg-white/10 backdrop-blur-lg rounded-3xl rotate-6"></div>
          <div className="absolute w-72 h-96 bg-white/5 backdrop-blur-lg rounded-3xl -rotate-6"></div>
        </div>
      </section>
    </main>
  );
}
