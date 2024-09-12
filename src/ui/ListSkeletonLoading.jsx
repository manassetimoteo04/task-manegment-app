function ListSkeletonLoading({ times }) {
  return (
    <div className="list-skeleton-loading">
      {Array.from({ length: times }, (_, i) => (
        <div className="skeleton-box" key={i}>
          <div className="skeleton-circle"></div>
          <div className="skeleton-content">
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListSkeletonLoading;
