import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "1rem",
            padding: 0,
            justifyContent: "space-around"
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">View Books</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Menu;
