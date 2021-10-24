import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cart } from "./Cart";

export interface NavbarProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ count, setCount }) => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className="hidden lg:flex justify-between items-center py-8 border-b-2 mx-32 ">
      <div className="flex">
        <Image
          src="/images/logo.svg"
          width={120}
          height={20}
          layout="fixed"
          alt="Company Logo"
        />

        <div>
          <Link href="#" passHref>
            <a className="mx-4 py-8 anchor-link relative">Collections</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-4 py-8 anchor-link relative">Men</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-4 py-8 anchor-link relative">Women</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-4 py-8 anchor-link relative">About</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-4 py-8 anchor-link relative">Contact</a>
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-4 relative">
          <Image
            className="cursor-pointer"
            src="/images/icon-cart.svg"
            width={20}
            height={20}
            layout="fixed"
            alt="Cart Icon"
            onClick={() => setToggleCart((prevState) => !prevState)}
          />

          <Cart count={count} toggleCart={toggleCart} setCount={setCount} />
        </div>

        <Image
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

export default Navbar;
