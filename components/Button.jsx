const Button = ({ children, classes, clickHandling }) => {
  return (
    <>
      <button className={`${classes}`} onClick={clickHandling}>
        {children}
      </button>
    </>
  );
};

export default Button;
