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
    <div className="relative py-12 px-4">
      {/* Decorative top ornament */}
      <div className="flex justify-center mb-6">
        <svg
          width="80"
          height="30"
          viewBox="0 0 80 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b6fa8]"
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
      <div className="relative max-w-md mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(139,111,168,0.15)] p-8">
        {/* Title */}
        <h3
          className="text-center mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#5a3d6e",
          }}
        >
          {title}
        </h3>

        {/* Date and Time Box */}
        <div className="bg-[#e8dff5] rounded-xl p-4 mb-6">
          <p
            className="text-center mb-2"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.25rem",
              color: "#5a3d6e",
            }}
          >
            {date}
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "#5a3d6e",
            }}
          >
            {time}
          </p>
        </div>

        {/* Invited By Section */}
        <div className="mb-6">
          <p
            className="text-center mb-4 italic"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.875rem",
              color: "#5a3d6e",
            }}
          >
            Invited by
          </p>
          <div className="space-y-2">
            {invitedBy.map((name, index) => (
              <div key={index}>
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1rem",
                    color: "#5a3d6e",
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
                      color: "#5a3d6e",
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
        <div className="text-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5a3d6e] hover:text-[#8b6fa8] transition-colors"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
            }}
          >
            <MapPin className="w-4 h-4" />
            <span className="border-b border-dotted border-[#5a3d6e]">
              {location}
            </span>
          </a>
          <p
            className="mt-1"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "#5a3d6e",
            }}
          >
            {locationAddress}
          </p>
        </div>
      </div>

      {/* Decorative bottom ornament */}
      <div className="flex justify-center mt-6">
        <svg
          width="60"
          height="25"
          viewBox="0 0 60 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b6fa8]"
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

