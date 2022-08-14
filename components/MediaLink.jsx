import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaBook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const MediaLink = () => {
  const dataLink = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/khoeruroziqin/",
      icon: <FaLinkedinIn className='mr-2 text-base sm:text-lg' />,
    },
    {
      name: "Github",
      link: "https://github.com/roziqinkhoeru",
      icon: <FaGithub className='mr-2 text-base sm:text-lg' />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/roziqinkhoeru/",
      icon: <RiInstagramFill className='mr-2 text-base sm:text-lg' />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCzUYv8PkYwLeFCnLX1-6CXQ",
      icon: <FaYoutube className='mr-2 text-base sm:text-lg' />,
    },
    {
      name: "Showcase",
      link: "https://roziqinkhoeru.showwcase.com/",
      icon: <FaBook className='mr-2 text-base sm:text-lg' />,
    },
  ];
  return (
    <>
      <div className='flex flex-wrap items-center'>
        {dataLink.map((item, index) => {
          return (
            <div key={index} className='mr-4 mb-3'>
              <Link href={item.link}>
                <a
                  className='text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center'
                  target='_blank'
                >
                  {item.icon}
                  <span className='text-sm sm:text-base'>{item.name}</span>
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
