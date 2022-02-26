import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>👾🔥🤯🧨🤯🧨🤯🧨🤯🧨🤯🧨🤯🧨🤯🔥👾</h1>

      <Link to="/about">About</Link>
    </>
  );
};

export const About = () => {
  return (
    <>
      <main>
        <h2>About Page</h2>
        <p>🤯 Hello World! 👋</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
