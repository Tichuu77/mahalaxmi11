import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t-4 border-primary/50 relative overflow-hidden pt-6 pb-8">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className=" w-28 h-28" />
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-bold text-white text-xl"
              >
                 Mahalaxmi  Infra
              </span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              Delivering premium solutions with excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4 text-lg"
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[{href : "#overview", label : "About"}, {href : "#amenities", label : "Amenities"},  { label: "Gallery", href: "#gallery" }, ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-lg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4 text-lg"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[  { href: "#testimonials", label: "Testimonials" }, { href: "#faq_sec", label: "Contact" },{label:"Boucher", href:"#boucher"}].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-lg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 ml-8">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4 text-lg"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
               Rajesh Nagfase
              </li>
              <li className="flex items-center gap-2 text-white/60 text-lg">
                <Phone size={14} className="text-white" />
                +91 9423987948
              </li>
              <li className="flex items-center gap-2 text-white/60 text-lg">
                <Mail size={14} className="text-white" />
               rajeshnagfase717@gmail.com
              </li>
              <li className="flex items-start gap-2 text-white/60 text-lg">
                <MapPin size={14} className="text-white mt-0.5 flex-shrink-0" />
                123 Luxury Avenue
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px  bg-white/10 my-8"></div>

      
      </div>
    </footer>
  )
}
