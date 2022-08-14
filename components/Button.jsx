const Button = ({ children, className, clickHandling }) => {
  return (
    <>
      <button className={`${className}`} onClick={clickHandling}>
        {children}
      </button>
    </>
  );
};

export default Button;
