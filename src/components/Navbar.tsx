import Logo from "assets/logo.png";
import NetlifyButton from "./NetlifyButton";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import MenuRounded from "@material-ui/icons/MenuRounded";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const menuItems = [
    { label: "Documentation", href: "https://fireck-docs.netlify.app/" },
    { label: "Get Support", href: "https://github.com/rromikas/fireck/issues" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-10 left-0 top-0 w-full p-7 flex justify-between items-center text-white font-medium">
      <img width={135} src={Logo}></img>
      <div className="hidden md:flex items-center">
        {menuItems.map((x, i) => (
          <a
            href={x.href}
            target="_blank"
            className="px-7 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg h-42px leading-42px"
          >
            {x.label}
          </a>
        ))}
        <div className="ml-7">
          <NetlifyButton></NetlifyButton>
        </div>
      </div>
      <MenuRounded
        onClick={() => setOpen(true)}
        className="md:hidden cursor-pointer"
        fontSize="large"
      ></MenuRounded>
      <Drawer onClose={() => setOpen(false)} open={open} anchor="right">
        <div className="bg-blue-400 text-white h-full p-7 flex flex-col justify-between">
          <div>
            {menuItems.map((x, i) => (
              <a
                href={x.href}
                target="_blank"
                className="px-7 cursor-pointer mb-3 bg-white bg-opacity-10 rounded-lg h-42px leading-42px block"
              >
                {x.label}
              </a>
            ))}
            <NetlifyButton></NetlifyButton>
          </div>
          <div
            onClick={() => setOpen(false)}
            className="px-7 cursor-pointer mb-3 bg-white bg-opacity-10 rounded-lg h-42px leading-42px block text-center"
          >
            Close
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
