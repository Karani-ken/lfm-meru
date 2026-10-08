import Image from "next/image";

export default function AboutPastorSection() {
  return (
    /*
     * `relative` + `pb-[240px]` gives room below the content
     * for the address card to sit in the gray area.
     * The card is `absolute bottom-0 translate-y-1/2` so its
     * top half is in the gray section and its bottom half
     * overlaps down into the Footer map.
     */
    <section className="relative bg-[#f4f5f7] pt-20 lg:pt-28 pb-[240px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Photo + name card ────────────────────────────── */}
          <div className="relative flex-shrink-0 w-full lg:w-[480px]">
            {/* Main photo */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Senior Pastors of LFM Meru"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>

            {/* Name badge — overlaps bottom-left of photo */}
            <div className="absolute bottom-0 left-0 bg-[#0f1d4a] rounded-tr-2xl px-8 py-6 max-w-[280px]">
              <p className="text-[#cc1111] font-bold text-base mb-1">
                Ps. Noah &amp; Ps. Danielle Kitho
              </p>
              <p className="text-white text-sm leading-snug">
                Senior Pastors of LFM Meru
              </p>
            </div>
          </div>

          {/* ── RIGHT: Text content ───────────────────────────────── */}
          <div className="flex-1 max-w-xl">
            {/* Label */}
            <p className="text-[#6b7280] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              The Church
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f36] leading-tight mb-6">
              We are a church that believes in
              Jesus &amp; loves God and people
            </h2>

            {/* Body */}
            <p className="text-[#6b7280] leading-relaxed mb-8">
              At Living Faith Ministries Meru, we are a family of believers
              passionate about encountering God, growing in His Word, and
              transforming our community through the love of Christ. Whether
              you are new to faith or have walked with God for years, there
              is a place for you here. Come as you are — you are welcome.
            </p>

            {/* Handwritten signature */}
            <div
              className="text-[#1a1f36] select-none"
              style={{
                fontFamily: "'Brush Script MT', 'Segoe Script', 'Dancing Script', cursive",
                fontSize: "2.2rem",
                lineHeight: 1.2,
                opacity: 0.75,
              }}
              aria-label="Pastor Noah Kitho's signature"
            >
              Noah Kitho
            </div>
          </div>

        </div>
      </div>

      {/* ── ADDRESS CARD ─────────────────────────────────────────────
          Sits at the bottom of the gray section and spills downward
          into the Footer map via `translate-y-1/2`.
          z-20 keeps it above the map iframe.
      ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl px-8 sm:px-14 py-10 w-full max-w-2xl text-center pointer-events-auto translate-y-1/2">
          <p className="text-[#6b7280] text-xs font-bold tracking-[0.18em] uppercase mb-4">
            Mon &mdash; Fri &nbsp;/&nbsp; 8:00 AM &mdash; 5:00 PM
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f36] leading-snug mb-7">
            Meru Town, Meru County,
            <br />
            Kenya
          </h3>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-3 bg-[#cc1111] hover:bg-[#a50e0e] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +254 700 000 000
          </a>
        </div>
      </div>
    </section>
  );
}
