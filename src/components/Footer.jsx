import { Link } from "react-router";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaRegCopyright,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import WhiteLogo from "../assets/logo-white.png";

const usefulLinks = [
  { name: "Home", path: "/" },
  { name: "All-Products", path: "/all-products" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F5] pt-24 border-t border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div className="md:col-span-1">
            <img src={WhiteLogo} alt="Logo" className="h-7 lg:h-10" />
            <p className="mt-6 text-sm max-w-xs text-white/50 leading-relaxed font-light italic">
              "Seamlessly blend Style and Comfort, offering a curated collection
              that empowers individuals."
            </p>

            {/* Newsletter Input */}
            <div className="mt-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-4 text-white/30">
                Our Newsletter
              </h4>
              <div className="flex bg-white/5 border border-white/10 p-1">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent w-full py-3 px-4 text-[10px] outline-none placeholder:text-white/20 uppercase tracking-widest"
                />
                <button className="bg-[#E5C3B2] text-black px-4 hover:bg-white transition-all duration-300">
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1 lg:pl-10">
            <h3 className="font-arsenal text-sm font-bold uppercase tracking-[3px] mb-8">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-medium">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#E5C3B2] transition-colors text-white/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[3px] mb-8    ">
              Visit Us
            </h3>
            <ul className="space-y-6 text-[11px] tracking-[2px] text-white/50 leading-loose">
              <li className="flex items-start gap-3">
                Jl. Raya Kuta Chartered No.70 Street, Denpasar
              </li>
              <li className="text-white underline underline-offset-8 decoration-white/10">
                proromana2004@gmail.com
              </li>
              <li>(+880) 179 6953902</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[3px] mb-8    ">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {[FaFacebook, FaLinkedin, FaXTwitter, FaInstagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="h-10 w-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-[#E5C3B2] hover:text-[#E5C3B2] transition-all duration-500"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright Area --- */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[4px] text-white/20 italic">
            <FaRegCopyright />
            <span>
              2026 Textilia —{" "}
              <a
                target="_blank"
                href="https://romana-khatun.web.app/"
                className="text-white underline not-italic"
              >
                Romana Khatun
              </a>{" "}
              . All Rights Reserved.
            </span>
          </div>
          <div className="text-[9px] uppercase tracking-[3px] text-white/30 font-bold hover:text-white cursor-pointer transition-colors">
            Back To Top
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
