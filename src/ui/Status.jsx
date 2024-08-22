function Status({ children, type }) {
  return <span className={`status statu-${type}`}>{children}</span>;
}

export default Status;
