"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Handburger, WhatsappIcon } from "@/components/svg-icons/menu-icon";
import { socialLink } from "constants/constants";
import { usePathname } from "next/navigation";
import React from "react";

type ManuArrChildren = {
  name: string;
}

type MenuArr = {
    name: string;
    children?: ManuArrChildren[];
    url?: string;
}
const menuArr:MenuArr[] = [
  { name: "home", url: "/" },
  { name: "about" },
  {
    name: "courses",
    children: [
      { name: "frontend" },
      { name: "backend" },
      { name: "fullstack" },
    ],
  },
  { name: "faqs" },
  { name: "contact" },
];

const Logo = () => (
  <Link href="/">
    <Image src="/Topstack1.png" alt="Topstack1 logo" width={150} height={100} />
  </Link>
);

const NavItem = ({ item, pathName }: { item: MenuArr; pathName: string }) => {
  console.log(pathName);
  if (item.children) {
    return (
      <Menu as="div" className="relative">
        <MenuButton className="px-4 py-2 font-bold text-active-blue-600 capitalize cursor-pointer">
          {item.name}
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <MenuItems className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            {item.children.map((child: ManuArrChildren, idx: number) => (
              <MenuItem key={idx}>
                <Link
                  href={`/${item.name}/${child.name}`}
                  className={`block px-4 py-2 capitalize hover:bg-active-blue-100`}
                >
                  {child.name}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    );
  }

  return (
    <Link
      href={item.name === "home" ? "/" : `/${item.name}`}
      className={`px-4 py-2 font-bold capitalize  ${pathName === (item.name || "/") ? "text-active-red-700" : "text-active-blue-600"}`}
    >
      {item.name}
    </Link>
  );
};

const DesktopMenu = () => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <nav className="flex items-center justify-between py-5 px-10">
      <Logo />
      <div className="flex gap-4">
        {menuArr.map((item: MenuArr, idx) => (
          <React.Fragment key={idx}>
            <NavItem item={item} pathName={pathName} />
          </React.Fragment>
        ))}
      </div>
      <MenuContact />
    </nav>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  console.log(pathName)

  return (
    <div>
      <div className="justify-center">
        <MenuContact />
      </div>
      <nav className="flex items-center justify-between p-4">
        <Logo />
        <div className="relative">
          <button onClick={() => setOpen(!open)}>
            <Handburger width={30} height={20} />
          </button>

          {open && (
            <div className="absolute top-12 right-0 w-52 bg-white shadow-lg rounded-md p-4 z-50">
              <ul className="flex flex-col gap-2">
                {menuArr.map((item, idx) =>
                  item.children ? (
                    <li key={idx}>
                      <details className="cursor-pointer">
                        <summary className="capitalize font-bold text-gray-600">
                          {item.name}
                        </summary>
                        <ul className="pl-4 mt-2 flex flex-col gap-1">
                          {item.children.map((child:{name: string}, i: number) => (
                            <li key={i}>
                              <Link
                                href={`/${child.name}`}
                                className="capitalize text-gray-500"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link
                        href={`/${item.name}`}
                        className="font-bold capitalize text-gray-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const CustomMenubar = () => (
  <>
    <div className="hidden lg:block mb-20">
      <DesktopMenu />
    </div>
    <div className="block lg:hidden">
      <MobileMenu />
    </div>
  </>
);

export default CustomMenubar;

const WhatsAppFloat = () => {
  return (
    <Link
      href={socialLink.whatsappLink}
      target="_blank"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-green-800 hover:bg-green-600 text-green rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
        <WhatsappIcon />
      </div>
    </Link>
  );
};

const MenuContact = () => {
  return (
    <div className="flex flex-col gap-3">
      <small className="font-bold flex justify-center md:justify-start">
        Musat Filling Station, Okeresi Ede, Osun State
      </small>
      <div className="flex justify-center">
        <div className="flex gap-2 items-center justify-center lg:justify-start">
          <div className="bg-active-red-700 rounded-full w-7 h-7">
            <WhatsappIcon />
          </div>
          <Link href="tel:+2347035853137">+2347035853137</Link>
        </div>
        <div>
          <WhatsAppFloat />
        </div>
      </div>
    </div>
  );
};
