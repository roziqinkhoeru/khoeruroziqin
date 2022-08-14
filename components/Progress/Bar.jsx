export const Bar = ({ animationDuration, progress }) => {
  return (
    <>
      <div
        className='bg-purple-800 dark:bg-purple-600 h-[3px] w-full left-0 top-0 fixed z-50'
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      ></div>
    </>
  );
};
