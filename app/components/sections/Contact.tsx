import SectionDetails from "../SectionDetails";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IconType } from "react-icons";

type ContactItem = {
  label: string;
  value: string;
  icon: IconType;
  href?: string;
};

const CONTACTS: ContactItem[] = [
  {
    label: "Email",
    value: "aswathyraj767@gmail.com",
    icon: FaEnvelope,
    href: "mailto:aswathyraj767@gmail.com",
  },
  {
    label: "Location",
    value: "Ernakulam, Kerala, India",
    icon: FaLocationDot,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aswathyraj",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/aswathyraj",
  },
  {
    label: "GitHub",
    value: "github.com/aswathyrajm",
    icon: FaGithub,
    href: "https://github.com/aswathyrajm",
  },
];

function Contact() {
  return (
    <section>
      <SectionDetails
        title="Contact"
        details={`Have a question or want to work together? Feel free to drop me a message.
I'd love to hear from you!`}
      />

      <ul className="flex gap-0 md:gap-10 items-center justify-center flex-wrap flex-col md:flex-row">
        {CONTACTS.map(({ label, value, icon: Icon, href }) => {
          const content = (
            <div>
              <div className="flex items-center gap-2 font-medium justify-center md:justify-start">
                <Icon size={20} />
                {label}
              </div>
              <p className="opacity-80">{value}</p>
            </div>
          );

          return (
            <li
              key={label}
              className="p-4 w-full md:w-fit flex items-center justify-center md:justify-start"
            >
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Contact;
