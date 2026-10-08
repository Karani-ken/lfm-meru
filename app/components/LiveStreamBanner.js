import Image from "next/image";

export default function LiveStreamBanner() {
  return (
    /*
     * This wrapper has NO background — it sits at the natural boundary between
     * HeroSection and ServicesSection. The negative top margin (-mt-20) pulls the
     * white card UP so it straddles the dark-hero / light-gray border, matching
     * the screenshot exactly. z-20 keeps it above both sections.
     */
    <div className="relative z-20 -mt-20 pb-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row items-stretch overflow-hidden">
          {/* Thumbnail image — fixed width on desktop, full-width on mobile */}
          <div className="relative w-full sm:w-52 flex-shrink-0 h-48 sm:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80"
              alt="Sunday Live Stream — worship crowd"
              fill
              sizes="(max-width: 640px) 100vw, 208px"
              className="object-cover object-center"
            />
          </div>

          {/* Text + buttons */}
          <div className="flex-1 px-8 py-7 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1a1f36] mb-1">
              Join the Sunday Live Stream
            </h3>
            <p className="text-[#6b7280] text-sm mb-5">
              Every Sunday at 9:00 am &amp; 11:00 am
            </p>
            <div className="flex flex-row items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#cc1111] hover:bg-[#a50e0e] text-white font-semibold px-7 py-3 rounded transition-colors text-sm"
              >
                Join Now
                <svg
                  className="w-4 h-4"
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
              <a
                href="#messages"
                className="text-sm font-medium text-[#1a1f36] hover:text-[#cc1111] transition-colors"
              >
                Past Messages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

