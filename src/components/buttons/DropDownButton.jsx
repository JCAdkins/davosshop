import { Avatar, Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import "../../customcss/custom.css";

const DropDownButton = ({ onClick }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Avatar
        rounded
        img={user.profile.image}
        className="border border-app_accent-900 rounded-full"
      />
      <Dropdown
        className="bg-app_accent-900"
        label={user.name.firstName + " " + user.name.lastName}
      >
        <Link to="/profile/settings">
          <DropdownItem className="text-white hover:text-black">
            Settings
          </DropdownItem>
        </Link>
        {user.roles.includes("admin") ? (
          <Link to="/admin">
            <DropdownItem className="text-white hover:text-black">
              Admin Panel
            </DropdownItem>
          </Link>
        ) : (
          <></>
        )}

        <DropdownItem className="text-white hover:text-black" onClick={onClick}>
          Sign out
        </DropdownItem>
      </Dropdown>
    </>
  );
};

export default DropDownButton;
