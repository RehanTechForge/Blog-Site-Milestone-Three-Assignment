import Image from "next/image";
import React from "react";
import { InputWithButton } from "./InputWithButton";
import { ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import Link from "next/link";

const MiddleHeader = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between space-y-4 py-2 items-center">
      <div className="flex sm:w-[25%] justify-between w-full">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={100} height={80} />
        </Link>
        <div className="flex sm:hidden gap-4 justify-center items-center">
          <Link href={"#"}>
            <User />
          </Link>
          <Link href={"#"}>
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <InputWithButton />
      <div className="hidden sm:flex gap-4 items-center">
        <Link href={"#"}>
          <User />
        </Link>
        <Link href={"#"}>
          <ShoppingCart />
        </Link>
        <div className="hidden sm:block">
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};

export default MiddleHeader;
