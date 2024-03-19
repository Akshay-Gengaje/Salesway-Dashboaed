import { NavLink } from "react-router-dom";

const MenuItem = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "flex mx-2 px-7 py-2 items-center space-x-4 bg-white rounded-md shadow-sm text-blue-500"
          : "flex mx-2 px-7 py-2 items-center space-x-4 hover:bg-white hover:rounded-md hover:shadow-sm"
      }
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-gray-500">{item.name}</span>
    </NavLink>
  );
};

export default MenuItem;
