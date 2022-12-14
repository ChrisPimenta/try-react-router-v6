import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  // Router v6 uses relative paths so we do not need to repeat the full path of welcome/new-user. Based on the parent route, it already knows to include it
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  )
};

export default Welcome;