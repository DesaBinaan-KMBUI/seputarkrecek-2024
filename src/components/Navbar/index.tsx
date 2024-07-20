import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./hamburger.module.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const NavRoute = [
    { id: 1, href: "/", name: "Home" },
    { id: 2, href: "/produk-pangan", name: "Produk & Pangan" },
    { id: 3, href: "/pariwisata-sejarah", name: "Pariwisata & Sejarah" },
    { id: 4, href: "/desbin-kmbui", name: "Desa Binaan KMBUI" },
  ];

  const router = useRouter();

  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="font-dm tracking-wide  pl-24 py-12 h-[82px] xl:flex hidden items-center fixed w-full bg-white z-50">
        <div className="flex flex-row justify-evenly w-full my-4">
          <Link href="">
            <Image
              src="/logo.svg"
              alt="logo"
              className="cursor-pointer"
              width={180}
              height={64}
            />
          </Link>

          <div className="flex ml-32 gap-10 w-full justify-evenly items-center">
            {NavRoute.map(({ id, href, name }) => (
              <div key={id} className="relative">
                <Link
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noreferrer" : undefined}
                >
                  <div>
                    <button
                      className={
                        router.asPath === href
                          ? "font-dmSans font-bold text-lg text-[16px] text-deep-cove-900"
                          : "font-dmSans font-bold text-lg text-[16px] text-[#9CA3AF]"
                      }
                      onClick={toggleHamburger}
                    >
                      {name}
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 md:px-12 py-5 flex xl:hidden items-center fixed w-full bg-white z-50">
        <div className="flex  w-full my-4">
          <div className="flex xl:hidden justify-center w-full items-center h-9 transition-all duration-500 ease-in-out">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                className="cursor-pointer"
                width={200}
                height={200}
              />
            </Link>
            <div className="flex w-full justify-end">
              <button
                onClick={toggleHamburger}
                className={open ? styles.whnth : styles.wh}
              >
                <div className={styles.icon}></div>
              </button>
            </div>
          </div>
          <div
            className={
              open
                ? `navLink absolute transition-all duration-500 ease-in-out top-[5rem] bg-white opacity-100 left-0 w-screen h-screen px-6 py-[1.8rem]`
                : ` navLink absolute  transition-all duration-500 ease-in-out top-[5rem] bg-white opacity-0 left-[100vw] w-screen h-screen px-6 py-[1.8rem]`
            }
          >
            <div className=" md:px-8 font-poppins font-normal text-2xl text-[#9CA3AF] flex flex-col gap-6">
              {NavRoute.map(({ id, href, name }) => (
                <div key={id} className="relative">
                  <Link
                    href={href}
                    target={href.startsWith("https://") ? "_blank" : undefined}
                    rel={href.startsWith("https://") ? "noreferrer" : undefined}
                  >
                    <div>
                      <button
                        className={
                          router.asPath === href
                            ? "font-dmSans font-semibold text-[16px] text-deep-cove-900"
                            : "font-dmSans text-[16px] text-gray-400"
                        }
                        onClick={toggleHamburger}
                      >
                        {name}
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
