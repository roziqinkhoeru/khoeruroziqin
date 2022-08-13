import Link from "next/link";
import React from "react";
import { BiSun } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed top-0'>
        <div className='px-20 py-5 flex items-center justify-between'>
          <Link href='/'>
            <a className='font-bold text-xl text-fuchsia-500 px-2 pb-2 pt-1 border border-fuchsia-700 rounded-lg'>
              KR
            </a>
          </Link>
          <div className=''>
            <BiSun
              size={28}
              className='text-white transition-all duration-200 ease-in-out hover:text-gray-300'
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
