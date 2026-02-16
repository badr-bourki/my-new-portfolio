import { SOCIALS } from "../constants";

// Social Sidebar
export const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-8 px-6 py-8">
      {/* Vertical Line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#915eff] to-transparent" />

      {/* Social Icons */}
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#1d1836] border border-[#915eff] hover:bg-[#915eff] transition-all duration-300 cursor-pointer hover:scale-110"
          title={social.name}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-1/2 h-1/2 object-contain opacity-80 group-hover:opacity-100"
          />
        </a>
      ))}

      {/* Vertical Line End */}
      <div className="w-[1px] h-12 bg-gradient-to-t from-transparent via-[#915eff] to-transparent" />
    </div>
  );
};
