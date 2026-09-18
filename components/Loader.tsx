const FRAMES = ["a01", "a02", "a03", "a04", "a12", "al011"];

export default function Loader() {
  return (
    <div className="loader">
      {FRAMES.map((name) => (
        <img key={name} src={`/images/analog/${name}-sm.jpg`} alt="" />
      ))}
    </div>
  );
}
