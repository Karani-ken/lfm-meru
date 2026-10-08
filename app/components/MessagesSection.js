import Image from "next/image";

const messages = [
  {
    title: "Renewing your Mind",
    series: "HOPE FOR TOMORROW",
    category: "PAST MESSAGES",
    date: "September 6, 2021",
    image:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=600&q=80",
    imageAlt: "Preacher at pulpit with congregation",
  },
  {
    title: "Having Faith when life is Hard",
    series: "HOPE FOR TOMORROW",
    category: "PAST MESSAGES",
    date: "August 30, 2021",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
    imageAlt: "Open Bible on wooden table",
  },
  {
    title: "The Hope of His Calling",
    series: "HOPE FOR TOMORROW",
    category: "PAST MESSAGES",
    date: "August 23, 2021",
    image:
      "https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?w=600&q=80",
    imageAlt: "Church worship congregation with hands raised",
  },
];

export default function MessagesSection() {
  return (
    <section id="messages" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#cc1111] text-xs font-bold tracking-widest uppercase mb-3">
            Current Series
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f36] mb-4">
            Hope for Tomorrow
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Get caught up with the current message series! Discover powerful
            teachings that will strengthen your faith and renew your hope.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {messages.map((msg) => (
            <div key={msg.title} className="group">
              {/* Thumbnail */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5">
                <Image
                  src={msg.image}
                  alt={msg.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play-button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#cc1111] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <p className="text-xs font-bold tracking-wide mb-2">
                <span className="text-[#cc1111]">{msg.series}</span>
                <span className="text-[#6b7280] mx-1">|</span>
                <span className="text-[#cc1111]">{msg.category}</span>
              </p>

              <h4 className="text-lg font-bold text-[#1a1f36] mb-2 group-hover:text-[#1a2b8c] transition-colors">
                {msg.title}
              </h4>
              <p className="text-[#6b7280] text-sm mb-4">
                Posted on {msg.date}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#1a1f36] hover:text-[#cc1111] uppercase transition-colors border-b-2 border-transparent hover:border-[#cc1111] pb-0.5"
              >
                Listen to the Message
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

