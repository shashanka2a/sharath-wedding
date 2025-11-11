"use client";

import { MapPin } from "lucide-react";

interface InvitationCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  locationAddress: string;
  mapUrl: string;
  invitedBy: string[];
}

export function InvitationCard({
  title,
  date,
  time,
  location,
  locationAddress,
  mapUrl,
  invitedBy,
}: InvitationCardProps) {
  return (
    <div className="relative py-12 px-4 h-full flex flex-col">
      {/* Decorative top ornament */}
      <div className="flex justify-center mb-6 flex-shrink-0">
        <svg
          width="80"
          height="30"
          viewBox="0 0 80 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#d4af37]"
        >
          <path
            d="M30 15 Q35 10 40 15 Q45 20 50 15"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <circle cx="25" cy="15" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="55" cy="15" r="2" fill="currentColor" opacity="0.6" />
          <path
            d="M20 15 Q15 12 10 15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M60 15 Q65 12 70 15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Main Card */}
      <div className="relative max-w-md mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(212,175,55,0.15)] p-8 flex-1 flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(212,175,55,0.25)] hover:-translate-y-1 scroll-fade-in">
        {/* Title */}
        <h3
          className="text-center mb-6 flex-shrink-0"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#4a4a4a",
          }}
        >
          {title}
        </h3>

        {/* Date and Time Box */}
        <div className="bg-[#f5ebe0] rounded-xl p-4 mb-6 flex-shrink-0 transition-all duration-300 hover:bg-[#f0e5d5]">
          <p
            className="text-center mb-2"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.25rem",
              color: "#4a4a4a",
            }}
          >
            {date}
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "#4a4a4a",
            }}
          >
            {time}
          </p>
        </div>

        {/* Invited By Section */}
        <div className="mb-6 flex-1 flex flex-col justify-center min-h-[100px]">
          <p
            className="text-center mb-4 italic flex-shrink-0"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.875rem",
              color: "#4a4a4a",
            }}
          >
            Invited by
          </p>
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            {invitedBy.map((name, index) => (
              <div key={index}>
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1rem",
                    color: "#4a4a4a",
                  }}
                >
                  {name}
                </p>
                {index < invitedBy.length - 1 && (
                  <p
                    className="text-center my-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "0.75rem",
                      color: "#4a4a4a",
                      fontStyle: "italic",
                    }}
                  >
                    and
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="text-center flex-shrink-0">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#4a4a4a] hover:text-[#d4af37] transition-all duration-300"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
            }}
          >
            <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="border-b border-dotted border-[#4a4a4a]">
              {location}
            </span>
          </a>
          <p
            className="mt-1"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "#8a8a8a",
            }}
          >
            {locationAddress}
          </p>
        </div>
      </div>

      {/* Decorative bottom ornament */}
      <div className="flex justify-center mt-6 flex-shrink-0">
        <svg
          width="60"
          height="25"
          viewBox="0 0 60 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#d4af37]"
        >
          <path
            d="M25 12.5 Q30 8 35 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <circle cx="20" cy="12.5" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="12.5" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

