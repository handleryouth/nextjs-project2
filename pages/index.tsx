import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Gallery from "../components/Gallery";
import MobileGallery from "../components/MobileGallery";
import MobileMenu from "../components/MobileMenu";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";

interface RenderButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const renderButton: React.FC<RenderButtonProps> = ({ count, setCount }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-3/5 lg:justify-between mt-16 mb-8">
      <div className="flex lg:mr-8 ">
        <button
          className="rounded-l-md lg:rounded-none w-1/5 lg:w-12 h-16 lg:h-12 text-3xl bg-lightGrayishBlue text-orange font-black hover:opacity-80"
          onClick={() => {
            if (count !== 0) {
              setCount((prevState) => prevState - 1);
            } else {
              setCount(0);
            }
          }}
        >
          -
        </button>
        <p className="w-3/5 lg:w-12 h-16 lg:h-12 text-3xl flex justify-center items-center bg-lightGrayishBlue">
          {count}
        </p>
        <button
          className="rounded-r-md lg:rounded-none w-1/5 lg:w-12 h-16 lg:h-12 text-3xl bg-lightGrayishBlue text-orange font-black hover:opacity-80"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          +
        </button>
      </div>

      <button className="h-16 lg:h-auto bg-orange flex-grow rounded-md flex justify-center items-center text-white hover:opacity-80 lg:min-w-[200px] mt-4 lg:mt-0">
        <Image
          className="!text-white"
          src="/images/icon-cart.svg"
          width={20}
          height={20}
          layout="fixed"
          alt="Cart Icon"
        />
        <p className="ml-2">Add to cart</p>
      </button>
    </div>
  );
};

const renderProductDetail = () => {
  return (
    <>
      <h3 className="text-orange text-sm font-bold">SNEAKER COMPANY</h3>

      <h1 className="text-nearlyBlack text-5xl font-bold mt-4 mb-8">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-darkGrayishBlue lg:w-3/5 mb-8">
        These low-profile sneakers are your perfect casual wear companion.
        Feauturing a durable rubber outer sole, they`ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center">
        <h3 className="text-nearlyBlack text-3xl">$125.00</h3>
        <h5 className="text-orange ml-4 py-0.5 px-2 bg-orange bg-opacity-25 rounded-md font-bold ">
          50%
        </h5>
      </div>
      <p className="text-grayishBlue line-through">$250.00</p>
    </>
  );
};

interface RenderProductImageProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const renderProductImage: React.FC<RenderProductImageProps> = ({
  setActive,
}) => {
  return (
    <div className="hidden lg:flex lg:w-2/4 w-full flex-col items-center">
      <Image
        className="rounded-md "
        src="/images/image-product-1.jpg"
        width={450}
        height={450}
        alt="Shoes Picture"
        onClick={() => setActive(true)}
      ></Image>

      <div className="mt-2 w-[450px] flex justify-between">
        <Image
          className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
          src="/images/image-product-1-thumbnail.jpg"
          width={100}
          height={100}
          alt="Shoes Picture"
          onClick={() => setActive(true)}
        ></Image>
        <Image
          className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
          src="/images/image-product-2-thumbnail.jpg"
          width={100}
          height={100}
          alt="Shoes Picture"
          onClick={() => setActive(true)}
        ></Image>
        <Image
          className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
          src="/images/image-product-3-thumbnail.jpg"
          width={100}
          height={100}
          alt="Shoes Picture"
          onClick={() => setActive(true)}
        ></Image>
        <Image
          className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
          src="/images/image-product-4-thumbnail.jpg"
          width={100}
          height={100}
          alt="Shoes Picture"
          onClick={() => setActive(true)}
        ></Image>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Next Project 3 - ecommerce landing page</title>
      </Head>
      <div className="relative">
        <Gallery active={active} setActive={setActive} />
        <Navbar count={count} setCount={setCount} />

        <MobileNavbar
          count={count}
          setCount={setCount}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <MobileGallery />
      </div>

      <div className="flex mt-8 md:mx-16 xl:mx-32 flex-col lg:flex-row">
        {renderProductImage({ setActive })}
        <div className=" lg:w-3/5 lg:ml-8 px-4  ">
          {renderProductDetail()}
          {renderButton({ count, setCount })}
        </div>
      </div>
    </>
  );
};

export default Home;
