import Image from "next/image";

const campaigns = [
  {
    title: "Renovating our Local Children's Safe House",
    description:
      "Help our organization by donating today! All donations go directly to making a difference for our cause.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
    imageAlt: "Young girl reading a book",
    raised: 106147,
    donations: 66,
    goal: 140000,
  },
  {
    title: "Community Garden",
    description:
      "Help with our community garden by donating today! All produce from the garden will go directly to lower-income families in our community.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    imageAlt: "Child planting in a community garden",
    raised: 445362,
    donations: 54,
    goal: 30000,
  },
];

function formatMoney(n) {
  return "$" + n.toLocaleString();
}

function CampaignCard({ campaign }) {
  const percent = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
      {/* ── Text block ──────────────────────────────────────── */}
      <div className="px-8 pt-8 pb-5 text-center">
        <h3 className="text-lg font-extrabold text-[#1a1f36] leading-snug mb-3">
          {campaign.title}
        </h3>
        {/* Green underline divider */}
        <div className="mx-auto mb-4 h-[3px] w-12 rounded-full bg-[#22c55e]" />
        <p className="text-[#1a1f36] text-sm leading-relaxed">
          {campaign.description}
        </p>
      </div>

      {/* ── Image — flush, no radius ────────────────────────── */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={campaign.image}
          alt={campaign.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Stats + progress ────────────────────────────────── */}
      <div className="px-8 pt-5 pb-4">
        {/* Three stats */}
        <div className="grid grid-cols-3 text-center mb-4">
          <div>
            <p className="text-[#1a1f36] font-bold text-base">
              {formatMoney(campaign.raised)}
            </p>
            <p className="text-[#6b7280] text-xs mt-0.5">raised</p>
          </div>
          <div>
            <p className="text-[#1a1f36] font-bold text-base">
              {campaign.donations}
            </p>
            <p className="text-[#6b7280] text-xs mt-0.5">donations</p>
          </div>
          <div>
            <p className="text-[#1a1f36] font-bold text-base">
              {formatMoney(campaign.goal)}
            </p>
            <p className="text-[#6b7280] text-xs mt-0.5">goal</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#e07b39] rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* ── Donate button ───────────────────────────────────── */}
      <div className="px-8 pb-5 flex flex-col items-center gap-5">
        <a
          href="#"
          className="w-full max-w-xs flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold tracking-widest uppercase text-sm py-4 rounded transition-colors"
        >
          Donate Now
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Pagination dots */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#374151]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* ── Secure donation footer strip ────────────────────── */}
      <div className="bg-gray-100 py-3 flex items-center justify-center gap-1.5 text-[#6b7280] text-xs">
        <svg
          className="w-3.5 h-3.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11V7a4 4 0 10-8 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
          />
        </svg>
        Secure Donation
      </div>
    </div>
  );
}

export default function DonateSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-[#6b7280] text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Extra Giving Opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1f36] leading-snug mb-5">
            Donate to Make a Difference
            <br />
            in our Community
          </h2>
          <p className="text-[#6b7280] max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((c) => (
            <CampaignCard key={c.title} campaign={c} />
          ))}
        </div>

      </div>
    </section>
  );
}
