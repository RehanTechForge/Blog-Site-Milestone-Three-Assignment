import { Github, Linkedin, Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ContactItemProps {
  icon: React.ComponentType; // Change IconNode to React.ComponentType
  label: string;
  href: string;
}

const ContactItem = ({ icon: Icon, label, href }: ContactItemProps) => (
  <li className="text-secondary flex items-center space-x-2">
    <Link href={href} className="flex items-center gap-2">
      <span className="text-lg">
        <Icon /> {/* Render the icon as a component */}
      </span>
      <span className="text-sm sm:text-base lg:text-lg">{label}</span>
    </Link>
  </li>
);

const SocialItem = ({ icon: Icon, label, href }: ContactItemProps) => (
  <li className="text-secondary flex items-center space-x-2">
    <Link href={href} className="flex items-center gap-2">
      <span className="text-lg">
        <Icon /> {/* Render the icon as a component */}
      </span>
      <span className="text-sm sm:text-base lg:text-lg">{label}</span>
    </Link>
  </li>
);

const MainSection = () => {
  return (
    <section className="grid grid-cols-1">
      <div className="relative">
        <Image
          src="/cards/slider.png"
          alt="contact image"
          height={300}
          width={1000}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full z-[99] bg-gradient-to-r from-secondary to-transparent"></div>

        <div className="absolute top-1/4 left-4 right-4 sm:top-1/3 sm:left-8 md:top-1/4 lg:top-1/3 bg-primary z-[100] h-max rounded-lg p-2 md:p-2 lg:p-2 flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md">
          <h2 className="uppercase font-semibold text-secondary text-center mb-5 text-sm sm:text-lg md:text-xl lg:text-2xl">
            Contact Us
          </h2>
          <ul className="w-full space-y-4">
            <ContactItem
              icon={Mail}
              label="muhammadrehan125768@gmail.com"
              href="mailto:muhammadrehan125768@gmail.com"
            />
            <ContactItem
              icon={Phone}
              label="03184966323"
              href="tel:03184966323"
            />
            <ContactItem
              icon={MapPinned}
              label="John Smith 123 Main Street Amsterdam, NH 1000 Netherlands"
              href="#"
            />
          </ul>

          <h2 className="uppercase font-semibold text-secondary text-center mt-5 mb-5 text-sm sm:text-lg md:text-xl lg:text-2xl">
            Social
          </h2>
          <ul className="w-full space-y-4">
            <SocialItem
              icon={Github}
              label="Muhammad Rehan"
              href="https://github.com/rehanTechForge"
            />
            <SocialItem
              icon={Linkedin}
              label="Muhammad Rehan"
              href="https://linkedin.com/in/rehantechforge"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
