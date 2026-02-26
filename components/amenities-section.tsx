import React, { memo } from "react"

const amenities = [
  {
    id: "basketball",
    title: "BASKETBALL COURT",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <circle cx="32" cy="32" r="14" stroke="white" strokeWidth="3" fill="none" />
        <path d="M4 32h56M32 4v56" stroke="white" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: "skating",
    title: "SKATING RING",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <ellipse cx="32" cy="32" rx="18" ry="12" stroke="white" strokeWidth="2" fill="none" />
        <path d="M20 28c-2-4-2-8 0-12" stroke="white" strokeWidth="2" />
        <path d="M44 28c2-4 2-8 0-12" stroke="white" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "meditation",
    title: "MEDITATION CENTER",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <circle cx="32" cy="20" r="4" fill="white" />
        <path d="M18 42c4-6 24-6 28 0" stroke="white" strokeWidth="3" fill="none" />
        <path d="M24 32l8 4 8-4" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  {
    id: "kids",
    title: "KIDS PLAY AREA",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <path d="M20 14v36M20 14h24l-16 18" stroke="white" strokeWidth="3" fill="none" />
        <path d="M16 50h20" stroke="white" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: "clubhouse",
    title: "CLUB HOUSE",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <path d="M18 30l14-10 14 10" stroke="white" strokeWidth="3" />
        <rect x="22" y="30" width="20" height="16" stroke="white" strokeWidth="3" fill="none" />
        <path d="M28 46v-8h8v8" stroke="white" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: "gym",
    title: "GYMNASIUM",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <path d="M18 32h28" stroke="white" strokeWidth="4" />
        <path d="M14 26v12M50 26v12" stroke="white" strokeWidth="4" />
        <path d="M22 24v16M42 24v16" stroke="white" strokeWidth="4" />
      </svg>
    )
  },
  {
    id: "amphitheater",
    title: "AMPHITHEATER",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <path d="M18 38c6-6 22-6 28 0" stroke="white" strokeWidth="3" />
        <path d="M22 32c4-4 16-4 20 0" stroke="white" strokeWidth="3" />
        <path d="M26 26c3-3 9-3 12 0" stroke="white" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: "library",
    title: "LIBRARY",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <rect x="20" y="16" width="6" height="32" stroke="white" strokeWidth="3" fill="none" />
        <rect x="29" y="16" width="6" height="32" stroke="white" strokeWidth="3" fill="none" />
        <rect x="38" y="16" width="6" height="32" stroke="white" strokeWidth="3" fill="none" />
      </svg>
    )
  },
  {
    id: "lawn",
    title: "LAWN",
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#1f4f3d" />
        <path d="M32 48V20" stroke="white" strokeWidth="3" />
        <path d="M32 22c-8 6-10 10-10 16" stroke="white" strokeWidth="3" />
        <path d="M32 22c8 6 10 10 10 16" stroke="white" strokeWidth="3" />
      </svg>
    )
  }
]

const AmenityCard = memo(function AmenityCard({
  title,
  icon,
}: {
  title: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 text-center">
      <div className="w-16 h-16 mx-auto mb-6">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
    </div>
  )
})

export default function LuxuryAmenities() {
  return (
    <section className="py-20 px-4 bg-white" id="amenities">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Luxury Living Features
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Experience the extraordinary with our signature waterfront lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              title={amenity.title}
              icon={amenity.icon}
            />
          ))}
        </div>

      </div>
    </section>
  )
}