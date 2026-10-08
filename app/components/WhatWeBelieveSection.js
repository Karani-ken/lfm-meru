import Image from "next/image";

const beliefs = [
  {
    title: "Jesus Is Lord",
    description:
      "We believe in the lordship of Jesus Christ — that He is the Son of God, who died, rose again, and reigns over all creation.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    imageAlt: "Worship crowd with JESUS sign lit up on stage",
  },
  {
    title: "God Is Love",
    description:
      "We believe God's defining nature is love. His love compels us to serve one another, our community, and the world around us.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    imageAlt: "Many hands forming a red heart together",
  },
  {
    title: "The Spirit Empowers",
    description:
      "We believe the Holy Spirit is alive and active today, empowering every believer to live a life of purpose, prayer, and power.",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
    imageAlt: "Woman reading an open Bible",
  },
];

export default function WhatWeBelieveSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-[#6b7280] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            All About Jesus
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f36] mb-5">
            What We Believe
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
          {beliefs.map((belief) => (
            <div key={belief.title} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-6">
                <Image
                  src={belief.image}
                  alt={belief.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-[#1a1f36] mb-3">
                {belief.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b7280] text-sm leading-relaxed max-w-[280px]">
                {belief.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA button ─────────────────────────────────────────────── */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block bg-[#e07b39] hover:bg-[#c96a2a] text-white font-bold px-10 py-4 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}
