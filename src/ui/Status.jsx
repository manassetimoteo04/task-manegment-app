function Status({ children, type }) {
  return <span className={`status statu-${type}`}>&bull;{children}</span>;
}

export default Status;
