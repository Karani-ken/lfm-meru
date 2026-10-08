import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen"
    >
      {/* Background church worship photo */}
      <Image
        src="https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?w=1920&q=80"
        alt="Church worship congregation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark navy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(15,29,74,0.88) 0%, rgba(26,43,140,0.80) 50%, rgba(13,27,94,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-44 w-full">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm font-bold tracking-widest uppercase mb-4">
            Church Love, Faith Love
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Welcome To
            <br />
            Our Church
          </h1>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            We are Living Faith Ministries Meru — a community of believers
            committed to spreading the gospel, serving our local community, and
            growing together in faith and love.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#cc1111] hover:bg-[#a50e0e] text-white font-semibold px-8 py-4 rounded transition-colors text-base"
          >
            I&apos;m New Here
          </a>
        </div>
      </div>
    </section>
  );
}

