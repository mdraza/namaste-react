function ShimmerUI() {
  return (
    <>
      <div className="res-container">
        {Array.from({ length: 8 }).map((e, index) => (
          <div className="res-card" key={index}></div>
        ))}
      </div>
    </>
  );
}

export default ShimmerUI;
