import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaBook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const MediaLink = () => {
  const dataLink = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/khoeruroziqin/",
      icon: <FaLinkedinIn size={18} className='mr-2' />,
    },
    {
      name: "Github",
      link: "https://github.com/roziqinkhoeru",
      icon: <FaGithub size={18} className='mr-2' />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/roziqinkhoeru/",
      icon: <RiInstagramFill size={18} className='mr-2' />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCzUYv8PkYwLeFCnLX1-6CXQ",
      icon: <FaYoutube size={18} className='mr-2' />,
    },
    {
      name: "Showcase",
      link: "https://roziqinkhoeru.showwcase.com/",
      icon: <FaBook size={18} className='mr-2' />,
    },
  ];
  return (
    <>
      <div className='flex flex-wrap items-center'>
        {dataLink.map((item, index) => {
          return (
            <div key={index} className='mr-4'>
              <Link href={item.link}>
                <a
                  className='text-gray-400 hover:text-gray-100 flex items-center'
                  target='_blank'
                >
                  {item.icon}
                  {item.name}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MediaLink;
