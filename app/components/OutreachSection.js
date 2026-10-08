import Image from "next/image";

export default function OutreachSection() {
  return (
    <section className="relative bg-[#0f1d4a] overflow-hidden">
      {/* Faint background image for texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
          aria-hidden="true"
        />
        {/* Dark navy overlay so text stays fully legible */}
        <div className="absolute inset-0 bg-[#0f1d4a]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: headshot ──────────────────────────────────────── */}
          <div className="relative flex-shrink-0 w-[280px] sm:w-[320px]">

            {/* Orange quotation mark — overlaps top-left of photo */}
            <div
              className="absolute -top-5 -left-4 z-10 text-[#cc1111] select-none leading-none"
              style={{ fontSize: "6rem", lineHeight: 1, fontWeight: 900 }}
              aria-hidden="true"
            >
              &#x201C;
            </div>

            {/* B&W headshot */}
            <div className="relative w-full aspect-square rounded-none overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                alt="Outreach Ministries Leader"
                fill
                sizes="320px"
                className="object-cover object-top grayscale"
              />
            </div>

            {/* Orange name badge — overlaps bottom-left of photo */}
            <div className="absolute bottom-0 left-0 bg-[#cc1111] px-5 py-4 max-w-[240px]">
              <p className="text-white font-bold text-base leading-tight">
                Ps. Noah &amp; Ps. Danielle Kitho
              </p>
              <p className="text-white/85 text-sm mt-0.5">Senior Pastors, LFM Meru</p>
            </div>
          </div>

          {/* ── RIGHT: quote + body ─────────────────────────────────── */}
          <div className="flex-1 max-w-2xl">
            {/* Large bold quote */}
            <blockquote className="text-white font-extrabold text-2xl sm:text-3xl lg:text-[2rem] leading-snug mb-8">
              Our goal is to reach the lost in our community who are under
              oppression from sin, addiction, or broken systems. We work
              every day to help people build better lives through Christ.
            </blockquote>

            {/* Body paragraph */}
            <p className="text-white/70 leading-relaxed">
              At LFM Meru we believe every life carries divine purpose. Our
              outreach programmes serve the streets, schools, and homes of
              Meru County — bringing the hope of the gospel through
              practical compassion, discipleship, and community
              transformation. When one person is restored, the whole
              community rises.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
