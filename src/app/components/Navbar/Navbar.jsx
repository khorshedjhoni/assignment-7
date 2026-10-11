
import NavbarAction from "./NavbarAction";
import NavLink from "./NavLink";
import Marquee from "../Marquee";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <NavbarAction />
      <NavLink />
      <Marquee />
    </header>
  );
}