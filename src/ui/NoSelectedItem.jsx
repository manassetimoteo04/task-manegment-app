function NoSelectedItem({ children }) {
  return (
    <div className="no-selected-item">
      <div className="box">{children}</div>
    </div>
  );
}

export default NoSelectedItem;
