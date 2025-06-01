"use client";

import Link from "next/link";
import Image from "next/image";
import { Handburger } from "@/components/svg-icons/menu-icon";
import { useState } from "react";

const menuArr = ["frontend", "backend", "fullstack"];

const CustomMenubar = () => {
  const menuItems = [
    { menu: menuArr[0] },
    { menu: menuArr[1] },
    { menu: menuArr[2] },
  ];

  const Logo = () => (
    <Link href="/">
      <Image
        src="/Topstack1.png"
        alt="Topstack1 logo"
        width={150}
        height={100}
      />
    </Link>
  );

  const DesktopMenu = () => (
    <nav className="grid grid-cols-3 py-5">
      <Logo />
      <div className="col-span-2 flex items-center">
        <ul className="flex">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={`/${item.menu}`}
                className="px-10 capitalize font-bold text-gray-500"
              >
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
      <nav className="flex justify-between p-4">
        <Logo />
        <div className="relative">
          <button onClick={() => setOpenMenu(!openMenu)} className="mt-4">
            <Handburger />
          </button>
          {openMenu && (
            <div className="absolute right-2 bg-white p-4">
              <ul>
                {menuItems.map((item, i) => (
                  <li key={i} className="py-1">
                    <Link href={`/${item.menu}`}>{item.menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };

  return (
    <>
      <div className="hidden md:block">
        <DesktopMenu />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </>
  );
};

export default CustomMenubar;
