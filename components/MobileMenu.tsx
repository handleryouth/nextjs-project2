import Link from "next/link";

interface MobileMenuProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenu,
  setMobileMenu,
}) => {
  return (
    <div
      className={`lg:hidden bg-darkBlue fixed h-screen z-20 top-0 px-8 pt-4 w-50vh left-negative-50vh transition-transform duration-300 ${
        mobileMenu && "translate-x-50vh "
      }`}
    >
      <div
        onClick={() => setMobileMenu(false)}
        className="cursor-pointer text-3xl text-white"
      >
        x
      </div>

      <div className="flex flex-col text-white text-xl ">
        <Link href="#" passHref>
          <a className="my-8">Collections</a>
        </Link>
        <Link href="#" passHref>
          <a className="mb-8">Men</a>
        </Link>

        <Link href="#" passHref>
          <a className="mb-8">Women</a>
        </Link>

        <Link href="#" passHref>
          <a className="mb-8">About</a>
        </Link>

        <Link href="#" passHref>
          <a className="mb-8">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
