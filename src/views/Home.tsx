import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>πΎπ₯π€―π§¨π€―π§¨π€―π§¨π€―π§¨π€―π§¨π€―π§¨π€―π₯πΎ</h1>

      <Link to="/about">About</Link>
      <Link to="/recipes">Recipes</Link>
    </>
  );
};

export const About = () => {
  return (
    <>
      <main>
        <h2>About Page</h2>
        <p>π€― Hello World! π</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
