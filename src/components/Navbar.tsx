import Logo from "assets/logo.png";
import NetlifyButton from "./NetlifyButton";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const menuItems = [{ label: "Documentation" }, { label: "Community" }, { label: "Pricing" }];
  return (
    <div className="fixed z-10 left-0 top-0 w-full p-7 flex justify-between items-center text-white font-medium">
      <img width={135} src={Logo}></img>
      <div className="flex items-center">
        {menuItems.map((x, i) => (
          <div className="px-7 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg h-42px leading-42px">
            {x.label}
          </div>
        ))}
        <NetlifyButton></NetlifyButton>
      </div>
    </div>
  );
};

export default Navbar;
