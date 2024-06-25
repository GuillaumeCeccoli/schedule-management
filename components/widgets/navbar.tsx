import { LINKSNAV } from "@/lib/constants";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavBar() {
  const navLinks = LINKSNAV.map(({ id, href, name }) => (
    <li key={id} className="list-none">
      <Link href={href}>{name}</Link>
    </li>
  ));

  return (
    <nav className="flex items-center justify-between w-11/12 mt-2 lg:w-2/5">
      <h1 className="text-xl font-bold">Plane Manager</h1>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <RiMenu4Fill size={30} />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-3 pt-10">
            {navLinks}
          </SheetContent>
        </Sheet>
      </div>
      <ul className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-6">
        {navLinks}
      </ul>
    </nav>
  );
}

