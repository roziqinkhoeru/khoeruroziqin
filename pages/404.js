import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <p className='text-center text-gray-600 font-semibold text-lg sm:text-3xl mb-6'>
          Oops! page not found 😥
        </p>
        <button className='py-2 px-4 border border-fuchsia-600 rounded-lg text-fuchsia-700 dark:text-fuchsia-200 font-semibold'>
          <Link href='/'>
            <a>Back to Homepage</a>
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
