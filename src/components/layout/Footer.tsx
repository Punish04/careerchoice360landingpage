import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const QUICK_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Exams", href: "#exams" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

const PROGRAMS = [
  { label: "PGDM", href: "#programs" },
  { label: "Full-time MBA", href: "#programs" },
  { label: "Executive MBA", href: "#programs" },
  { label: "Global Pathways", href: "#programs" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const ADDRESS_QUERY = encodeURIComponent(
  "C-30, Ground Floor, Sector-2, Near Noida Sector-15 Metro Station, Noida",
);

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/60 bg-background">
      <div className="container py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5" aria-label="CareerChoice360 home">
              <img src={logo} alt="CareerChoice360 logo" className="h-10 w-auto rounded-md object-contain" loading="lazy" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium MBA & PGDM admissions consultancy, mentoring future leaders into India's
              and the world's top B-schools.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold">Programs</h3>
            <ul className="mt-4 space-y-2.5">
              {PROGRAMS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  C-30, Ground Floor, Sector-2,
                  <br />
                  In front of Nirula's Hotel,
                  <br />
                  Near Noida Sector-15 Metro Station,
                  <br />
                  Noida
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <a href="tel:+918800854923" className="hover:text-foreground transition-colors">
                  +91-8800854923
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <a
                  href="mailto:info.careerchoice360@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
                  info.careerchoice360@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CareerChoice360. All rights reserved.</p>
          <p>Premium MBA / PGDM Admissions Counseling — Noida, India.</p>
        </div>
      </div>
    </footer>
  );
};
