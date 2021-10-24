import Image from "next/image";
import { useState } from "react";
import { NavbarProps } from "./Navbar";
export type { NavbarProps } from "./Navbar";
import { Cart } from "./Cart";

interface MobileNavbarProps extends NavbarProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  count,
  setCount,
  mobileMenu,
  setMobileMenu,
}) => {
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <div className="flex items-center justify-between lg:hidden px-2 my-4">
      <button
        className={`hamburger hamburger--collapse ${
          mobileMenu ? "is-active" : "none"
        }`}
        type="button"
        onClick={() => setMobileMenu((prevState) => !prevState)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className=" flex relative items-center">
        <div className="mr-4">
          <Image
            className="cursor-pointer"
            src="/images/icon-cart.svg"
            width={20}
            height={20}
            layout="fixed"
            alt="Cart Icon"
            onClick={() => setToggleCart((prevState) => !prevState)}
          />
        </div>

        <Cart count={count} toggleCart={toggleCart} setCount={setCount} />

        <Image
          className="mr-4"
          src="/images/image-avatar.png"
          width={50}
          height={50}
          layout="fixed"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
