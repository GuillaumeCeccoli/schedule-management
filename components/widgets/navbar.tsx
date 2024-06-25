import { LINKSNAV } from "@/lib/constants";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiMenu4Fill, RiMenuSearchLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavBar() {
  const navLinks = LINKSNAV.map(({ id, href, name }) => (
    <li key={id} className="list-none">
      <Link href={href}>{name}</Link>
    </li>
  ));

  return (
    <nav className="flex flex-col items-center w-10/12 gap-6 mt-4">
      <div className="flex flex-row items-center justify-between gap-6 w-full">
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
        <ul className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-10">
          {navLinks}
        </ul>
        <h1 className="text-lg font-bold">Plane Manager</h1>
        <IoIosAddCircleOutline size={30} className="lg:hidden" />
        <Button className="hidden lg:block" variant={"new"}>
          Ajouter
        </Button>
      </div>
      <div className="relative w-full mb-6 lg:w-2/5">
        <Input placeholder="Recherchez..." />
        <RiMenuSearchLine className="absolute right-2 top-2" size={24} />
      </div>
    </nav>
  );
}

