import type { FooterContent } from "@/content/functions/types";
import { tertiaryTitle } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ClockIcon from "../icons/ClockIcon";
import LocationIcon from "../icons/LocationIcon";
import StarIconSolid from "../icons/StarIconSolid";
import DocDelimiter from "./DocDelimiter";
import Separator from "./Separator";

interface Props {
  content: FooterContent;
  locale: string;
}

const Footer: FC<Props> = ({ content, locale }) => {
  const { location, openingHours, navigation, copyright, love, faq } = content;

  const socialNet = [
    { id: "facebook", href: "https://www.facebook.com", Icon: FaFacebook },
    { id: "instagram", href: "https://www.instagram.com", Icon: FaInstagram },
  ];

  return (
    <footer className="flex flex-col gap-5 items-center from-primary-active bg-gradient-to-t to-primary-bD text-black py-5">
      <DocDelimiter containerClassName="flex flex-col items-center justify-between text-center gap-20">
        <div className="flex flex-col justify-between gap-5 w-full lg:flex-row">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:text-start">
            <ClockIcon className="w-20" />
            <div>
              <h5 className={`${tertiaryTitle} text-white`}>
                {openingHours.title}
              </h5>
              <p>{openingHours.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:text-start">
            <StarIconSolid className="w-20" />
            <div>
              <h5 className={`${tertiaryTitle} text-white`}>{faq.title}</h5>
              <Link href={`/${locale}/faq`} className="hover:opacity-50">
                {faq.faqs}
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:text-start">
            <LocationIcon className="w-20" />
            <div>
              <h5 className={`${tertiaryTitle} text-white`}>
                {location.title}
              </h5>
              <p className="lg:w-100">{location.description}</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-5 text-white font-bold lg:flex-row">
            {navigation.map(({ id, href, label }) => (
              <Link key={id} href={href} className="hover:opacity-50">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-5">
            {socialNet.map(({ id, href, Icon }) => (
              <a key={id} href={href}>
                <Icon className="text-3xl text-pink-600 hover:opacity-50" />
              </a>
            ))}
          </div>
        </nav>
      </DocDelimiter>

      <Separator className="w-full h-1 bg-primary-accent" />
      <DocDelimiter containerClassName="flex flex-col items-center lg:justify-between lg:flex-row">
        <p>{copyright}</p>
        <p>{love}</p>
      </DocDelimiter>
    </footer>
  );
};

export default Footer;
