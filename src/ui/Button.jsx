function Button({ children, onClick, type, disabled }) {
  return (
    <button className={`${type}-btn btn`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
