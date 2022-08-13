import React from "react";

const Main = () => {
  return (
    <>
      <main className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col max-w-6xl'>
          <h1 className='mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Made With Experience
          </h1>
          <h3 className='mb-6'>by Khoeru Roziqin</h3>
          <p className='mb-3'>
            I am an undergraduate student of Informatics at Diponegoro
            University, Indonesia. I am very interested in the field of web
            development, especially in the Front End Wed Dev and UI Design. See
            my resume.
          </p>
          <p className=''>
            Get in touch. Don&apos;t be shy. Let&apos;s make some magic
            together. ✨
          </p>
        </div>
      </main>
    </>
  );
};

export default Main;
