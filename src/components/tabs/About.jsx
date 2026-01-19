export default function About({ dark }) {
  return (
    <>
      <img alt="profile" style={{ width: 120, borderRadius: "50%" }} />
      <h1 style={{ marginTop: "1rem", color: dark ? "#fff" : "#000" }}>
        Rohan Bagwe
      </h1>
      <p style={{ color: dark ? "#ccc" : "#333" }}>Full Stack Engineer</p>
    </>
  );
}
