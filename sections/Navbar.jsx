import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BiSun, BiMoon } from "react-icons/bi";
import Button from "../components/Button";

const Navbar = ({ themesSet }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationLink = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const renderThemeCanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button classes='' clickHandling={() => setTheme("light")}>
          <BiSun
            size={28}
            className='dark:text-white transition-all duration-200 ease-in-out hover:text-gray-300'
          />
        </Button>
      );
    } else {
      return (
        <Button classes='' clickHandling={() => setTheme("dark")}>
          <BiMoon
            size={28}
            className='dark:text-white transition-all duration-200 ease-in-out hover:text-gray-300'
          />
        </Button>
      );
    }
  };
  console.log(`nilai theme: ${theme}`);
  return (
    <>
      <nav className='w-full fixed top-0'>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='px-6 sm:px-20 py-5 flex items-center justify-between'>
            <Link href='/'>
              <a className='font-bold text-xl text-fuchsia-500 px-2 pb-2 pt-1 border border-fuchsia-700 rounded-lg'>
                KR
              </a>
            </Link>
            <div className=''>{renderThemeCanger()}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
