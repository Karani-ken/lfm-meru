import Image from "next/image";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    /*
     * mt-[-120px]: pulls the footer up so the map slides behind
     * the bottom half of the address card rendered in AboutPastorSection.
     * pt-[120px]: offsets the visible map content down the same amount
     * so the map starts below the card overlap zone.
     */
    <footer id="contact" className="relative mt-[-120px] pt-[120px]">

      {/* GOOGLE MAPS */}
      <div className="w-full h-[400px] sm:h-[480px] overflow-hidden">
        <iframe
          title="LFM Meru Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127675.0!2d37.6!3d0.047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1788069ba8f56ff5%3A0x2d2d7d9a3e1c0e4c!2sMeru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) contrast(0.85) opacity(0.9)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* DARK NAVY FOOTER BODY */}
      <div className="bg-[#0f1d4a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1 - Brand block */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
                  <Image src="/logo.jpeg" alt="LFM Meru Logo" width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-extrabold text-base leading-tight">LFM <span className="text-[#cc1111]">MERU</span></div>
                  <div className="text-white/60 text-xs">Living Faith Ministries</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Spreading the gospel and serving the community of Meru with love, faith, and hope.
              </p>
              <p className="text-white/70 text-sm mb-1">Meru Town, Meru County, Kenya</p>
              <p className="font-bold text-white text-sm">+254 700 000 000</p>
            </div>

            {/* Col 2 - Service Times */}
            <div>
              <h5 className="font-bold text-sm tracking-wider uppercase mb-5 text-white">Service Times</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li><div className="font-semibold text-white">Sunday Services</div><div>9:00 AM &amp; 11:00 AM</div></li>
                <li><div className="font-semibold text-white">Wednesday Prayer</div><div>6:30 PM</div></li>
                <li><div className="font-semibold text-white">Friday Youth</div><div>5:00 PM</div></li>
              </ul>
            </div>

            {/* Col 3 - Quick Links */}
            <div>
              <h5 className="font-bold text-sm tracking-wider uppercase mb-5 text-white">Quick Links</h5>
              <ul className="space-y-2.5 text-sm text-white/70">
                {["Home", "About Us", "Events", "Give Online", "Past Messages", "Contact"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#cc1111] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 4 - CTA */}
            <div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-6">
                See What God Can Do Through You.
              </h4>
              <a href="#give" className="inline-block bg-[#cc1111] hover:bg-[#a50e0e] text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-sm">
                Donate
              </a>
            </div>

          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
            <span>&copy; <CopyrightYear /> Living Faith Ministries Meru. All rights reserved.</span>
            <span>Designed with <span className="text-[#cc1111]">&#x2665;</span> for the glory of God</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
