const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Weekly Services",
    description: "Join us every Sunday for uplifting worship and powerful teaching from God's Word.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Youth",
    description: "Empowering the next generation with faith, purpose, and vibrant community.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kids",
    description: "A safe, fun and nurturing environment where children encounter God's love.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Special Events",
    description: "Seasonal celebrations, conferences, and community gatherings throughout the year.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Counseling",
    description: "Compassionate pastoral care and guidance for individuals and families in need.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: "Benevolence",
    description: "Reaching out to the community with practical help, hope, and God's grace.",
  },
];

export default function ServicesSection() {
  return (
    <section id="about" className="bg-[#f4f5f7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: heading + description */}
          <div className="lg:w-5/12">
            <p className="text-[#cc1111] text-xs font-bold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f36] leading-tight mb-5">
              We Love Serving Our Local Community
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              At LFM Meru, we are dedicated to serving our community with the
              love of Christ. Through worship, teaching, and outreach, we strive
              to make a lasting difference in the lives of those around us.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              Our ministries are designed to meet you where you are — whether
              you&apos;re just starting your faith journey or are a seasoned
              believer looking to grow deeper.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#cc1111] hover:bg-[#a50e0e] text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Right: service cards grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title}>
                <div className="w-12 h-12 rounded-xl border-2 border-[#e2e5ec] bg-white flex items-center justify-center text-[#1a2b8c] mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-[#1a1f36] mb-2">{service.title}</h4>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
