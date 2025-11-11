"use client";

import { FloralDivider } from "@/src/components/FloralDivider";
import { InvitationCard } from "@/src/components/InvitationCard";
import { MapPin, Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf9]">
      {/* Decorative corner florals */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="text-[#d4af37]">
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="35" cy="15" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2.5" fill="currentColor" />
          <circle cx="15" cy="35" r="2" fill="currentColor" />
          <path
            d="M20 20 Q25 15 35 15 M20 20 Q25 25 30 30 M20 20 Q15 25 15 35"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="fixed top-0 right-0 w-32 h-32 opacity-10 pointer-events-none rotate-90">
        <svg viewBox="0 0 100 100" className="text-[#d4af37]">
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="35" cy="15" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2.5" fill="currentColor" />
          <circle cx="15" cy="35" r="2" fill="currentColor" />
          <path
            d="M20 20 Q25 15 35 15 M20 20 Q25 25 30 30 M20 20 Q15 25 15 35"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12 animate-fadeIn">
            <p className="text-[#d4af37] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              You are invited to celebrate wedding of
            </p>
            <h1
              className="mb-2 transition-all duration-700"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "4rem",
                lineHeight: "1.2",
                color: "#4a4a4a",
              }}
            >
              Sharath & Meghana
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-[#d4af37] w-16" />
              <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
              <div className="h-px bg-[#d4af37] w-16" />
            </div>
          </div>

          {/* Photo */}
          <div className="max-w-2xl mx-auto mb-12 transition-all duration-700 hover:scale-[1.02]">
            <div className="relative rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/sharath.JPG"
                alt="Sharath and Meghana"
                className="w-full h-auto aspect-[4/3] object-cover"
                width={800}
                height={600}
                priority
              />
              {/* Gold border overlay */}
              <div className="absolute inset-0 border-8 border-[#d4af37]/20 pointer-events-none" />
            </div>
          </div>

          <div className="text-center">
            <p
              className="text-[#4a4a4a] mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.5rem",
              }}
            >
              Wednesday, November 26th, 2025
            </p>
            <a
              href="https://maps.app.goo.gl/Ajm1ooxmd9QsroBB6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#d4af37] transition-colors inline-flex items-center gap-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Degababu Function Hall, Kodad
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <FloralDivider />

          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "2.5rem",
              color: "#4a4a4a",
            }}
          >
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Groom's Ceremony */}
            <InvitationCard
              title="Groom's Ceremony"
              date="November 25, 2025"
              time="12:00 PM"
              location="V N REDDY GARDENS"
              locationAddress="Nammikal, Enubamla, Telangana"
              mapUrl="https://maps.app.goo.gl/kVRARJCbSHXvBGVXA"
              invitedBy={[
                "Smt & Sri Gogula Vimala - Somi Reddy"
              ]}
            />

            {/* Wedding Ceremony */}
            <InvitationCard
              title="Wedding Ceremony"
              date="November 26, 2025"
              time="10:46 AM"
              location="Degababu Function Hall"
              locationAddress="Kodad"
              mapUrl="https://maps.app.goo.gl/Ajm1ooxmd9QsroBB6"
              invitedBy={[
                "Smt & Sri Gogula Vimala - Somi Reddy",
                "Sri Narra Saidi Reddy - Jyothi"
              ]}
            />
          </div>

          <div className="mt-12 p-8 rounded-lg bg-[#f5ebe0]/50 border border-[#d4af37]/10">
            <p
              className="text-center text-[#4a4a4a] mb-3"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.125rem",
              }}
            >
              Dress Code
            </p>
            <p className="text-center text-[#8a8a8a]" style={{ fontFamily: "var(--font-inter)" }}>
              Formal Attire • Traditional
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-[#d4af37] fill-[#d4af37]" />
          <p
            className="mb-2"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.25rem",
              color: "#4a4a4a",
            }}
          >
            We can't wait to celebrate with you!
          </p>
          <p className="text-[#8a8a8a]" style={{ fontFamily: "var(--font-inter)" }}>
            Sharath & Meghana
          </p>
          <FloralDivider />
          <p className="text-[#8a8a8a] mt-4" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
            Made with love by{" "}
            <a
              href="https://knotify.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#c19a2e] transition-colors"
            >
              Knotify
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

