// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative h-80">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/Uzbekistan.mp4" // Directly reference the file in the public folder
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-10 z-10">
        <h1 className="text-4xl font-bold mb-4">Discover Uzbekistan</h1>
        <p>Explore the rich history, culture, and beauty of Uzbekistan.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
