import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Github, Mail, Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";

const TopHeader = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between py-2">
      <ul className="flex flex-col my-5 sm:my-0 sm:flex-row justify-center items-center capitalize gap-4">
        <li className="sm:border-r-2 sm:pr-4 flex gap-2">
          <span>
            <Phone />
          </span>
          <span>
            <Link href="tel:03184966323">03184966323</Link>
          </span>
        </li>
        <li className="sm:border-r-2 sm:pr-4 flex gap-2">
          <span>
            <Mail />
          </span>
          <span>
            <Link href="mailto:Mail@mail.com">Mail@mail.com</Link>
          </span>
        </li>
        <li className="sm:pr-4 flex gap-2">
          <span>
            <Github />
          </span>
          <span>
            <a
              href="https://github.com/RehanTechForge"
              target="_blank"
              rel="noopener noreferrer"
            >
              RehanTechForge
            </a>
          </span>
        </li>
      </ul>

      <div className="flex justify-between sm:justify-center items-center gap-2">
        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="En" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="En">En</SelectItem>
              <SelectItem value="pl">Polski</SelectItem>
              <SelectItem value="fr">Fr</SelectItem>
              <SelectItem value="du">Deutsch</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-2 flex-row-reverse items-center justify-center sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>BeautyBlog</SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col justify-center gap-10  items-center">
                    <li className="font-semibold hover:text-secondary hover:scale-110 transition-transform duration-200">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="font-semibold hover:text-secondary hover:scale-110 transition-transform duration-200">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="font-semibold hover:text-secondary hover:scale-110 transition-transform duration-200">
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li className="font-semibold hover:text-secondary hover:scale-110 transition-transform duration-200">
                      <Link href="/blogs">Blog</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="block sm:hidden">
            <ModeToggle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
