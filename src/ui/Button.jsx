function Button({ children, onClick, type }) {
  return (
    <button className={`${type}-btn btn`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
