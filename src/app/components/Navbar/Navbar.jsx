
import NavbarAction from "./NavbarAction";
import NavLink from "./NavLink";
import Marquee from "../Marquee";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <NavbarAction />
      <NavLink />
     <Suspense fallback={
<div className="border-y border-gray-200 bg-gray-100 py-2">
<div className="h-5 animate-pulse" />
</div>
}>
         <Marquee />
     </Suspense>
    </header>
  );
}