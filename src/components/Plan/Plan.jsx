function Plan({ name, cost }) {
  const monthly = true;
  const period = monthly ? "mo" : "yr";
  const rate = monthly ? 1 : 10;
  const costTitle = "$" + cost * rate + "/" + period;

  return (
    <div className="plan">
      <div className="icon"></div>
      <div className="description">
        <p className="name">{name}</p>
        <p className="cost">{costTitle}</p>
        <p className="title">2 months free</p>
      </div>
    </div>
  );
}
