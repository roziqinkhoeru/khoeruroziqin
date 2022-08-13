import React from "react";
import MediaLink from "./components/MediaLink";

const Main = () => {
  return (
    <>
      <main className='w-full h-screen min-h-[42rem] sm:min-h-0 flex items-center justify-center pt-8 sm:pt-12'>
        <div className='flex flex-col py-6 mx-6 sm:mx-16 md:mx-20 max-w-screen-2xl'>
          <h1 className='mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Made With Experience
          </h1>
          <h3 className='mb-6 text-gray-200'>by Khoeru Roziqin</h3>
          <div className='w-full sm:w-3/4 md:w-2/3'>
            <p className='mb-1 text-gray-400'>👋 Hi there</p>
            <p className='mb-3 text-gray-400'>
              I am a frontend web developer with more than 2 years of
              experience. I love all parts of the creative process and am
              constantly learning new skills to see the different perspectives
              on work and life.
            </p>
            <p className='mb-6 text-gray-400'>
              Get in touch. Don&apos;t be shy. Let&apos;s make some magic
              together. ✨
            </p>
          </div>
          <MediaLink />
        </div>
      </main>
    </>
  );
};

export default Main;
