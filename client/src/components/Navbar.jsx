import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuButtonClick = () => {
    setOpenMenu(!openMenu);
  };

  const renderNavList = () => {
    return (
      <>
        <li className="nav-link">Home</li>
        <li className="nav-link">IT Courses</li>
        <li className="nav-link">SE Courses</li>
        <li className="nav-link">EE Courses</li>
        <li className="nav-link">RM Courses</li>
      </>
    );
  };

  const renderOpenMenu = () => {
    return (
      <div
        className="absolute top-16 right-4 z-999 px-4 py-2 bg-white text-primary font-medium md:hidden"
        style={{ zIndex: 10 }}
      >
        <ul className="flex flex-col gap-0.5">{renderNavList()}</ul>
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 mb-9">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex gap-1 items-center">
          <img
            src="/images/nct-logo-no-bg.png"
            className="mr-3 h-12 md:h-16"
            alt="NCT-logo"
          />
          <span className="font-semibold text-2xl md:hidden text-primary">
            Neo Culture Tech
          </span>
        </a>
        <div>
          <ul className="hidden md:flex items-center gap-8 text-primary text-xl ">
            {renderNavList()}
          </ul>
        </div>
        <button onClick={onMenuButtonClick} className="md:hidden">
          <IconContext.Provider value={{ color: "#67c3df" }}>
            <FaBars className="w-6 h-6" />
          </IconContext.Provider>
        </button>
        {openMenu ? renderOpenMenu() : null}
      </div>
    </nav>
  );
};

export default Navbar;
