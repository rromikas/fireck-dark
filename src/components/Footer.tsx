import Logo from "assets/logo.svg";
import { useEffect, useState } from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [about, setAbout] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res2 = await fetch(`https://fireck-dboard.netlify.app/api/about`).then((x) => x.json());
      if (!res2.error) {
        setAbout(res2.value);
      }
    })();
  }, []);

  const links = [
    { label: "Features" },
    { label: "Screenshots" },
    { label: "Documentation" },
    { label: "Support forum" },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-between mx-auto text-white mb-4">
        <div className="w-full sm:w-auto mb-12">
          <img src={Logo} className="mb-7"></img>
          <div className="max-w-lg">{about}</div>
        </div>
        <div className="sm:pr-12 mb-12">
          <div className="font-semibold text-2xl mb-7 h-35px">Links</div>
          {links.map((l) => (
            <div className="font-medium hover:text-orange-300 cursor-pointer" key={l.label}>
              {l.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white py-7">
        <div className="mr-7">© {new Date().getFullYear()}, Fireck</div>
        <div className="mr-7">Terms</div>
        <div>Privacy</div>
      </div>
    </div>
  );
};

export default Footer;
