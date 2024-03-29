import { BsChatLeftTextFill } from "react-icons/bs";
const Mail = ({ mailHandling }) => {
  return (
    <>
      <div className='fixed right-6 sm:right-12 bottom-6 sm:bottom-8'>
        <button
          onClick={() => mailHandling()}
          className='flex justify-center items-center text-white dark:text-slate-200 bg-slate-500 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-500 w-14 h-14 rounded-full'
        >
          <BsChatLeftTextFill size={24} />
        </button>
      </div>
    </>
  );
};

export default Mail;
