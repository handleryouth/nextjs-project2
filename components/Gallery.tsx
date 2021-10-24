import Image from "next/image";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface GalleryProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery: React.FC<GalleryProps> = ({ active, setActive }) => {
  const galleryStyle = {
    display: `${active ? "flex" : "none"}`,
  };
  return (
    <div
      className="absolute w-screen h-screen  bg-nearlyBlack z-10 bg-opacity-80 items-center justify-center flex-col  "
      style={galleryStyle}
    >
      <div className="w-[450] h-[450]">
        <div
          onClick={() => setActive(false)}
          className="cursor-pointe flex justify-end text-3xl cursor-pointer text-white mb-4"
        >
          <p>x</p>
        </div>

        <div className=" flex flex-col items-center  justify-center ">
          <Swiper
            modules={[Navigation]}
            navigation
            className="w-[450px] h-[450px]"
          >
            <SwiperSlide>
              {" "}
              <Image
                src="/images/image-product-1.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
                layout="fixed"
                onClick={() => setActive(true)}
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/image-product-2.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
                layout="fixed"
                onClick={() => setActive(true)}
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/image-product-3.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
                layout="fixed"
                onClick={() => setActive(true)}
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/images/image-product-4.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
                layout="fixed"
                onClick={() => setActive(true)}
              ></Image>
            </SwiperSlide>
          </Swiper>

          <div className="mt-2 w-[450px] flex justify-between">
            <Image
              className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
              src="/images/image-product-1-thumbnail.jpg"
              width={100}
              height={100}
              alt="Shoes Picture"
              layout="fixed"
            ></Image>
            <Image
              className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
              src="/images/image-product-2-thumbnail.jpg"
              width={100}
              height={100}
              alt="Shoes Picture"
              layout="fixed"
            ></Image>
            <Image
              className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
              src="/images/image-product-3-thumbnail.jpg"
              width={100}
              height={100}
              alt="Shoes Picture"
              layout="fixed"
            ></Image>
            <Image
              className="rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity duration-200"
              src="/images/image-product-4-thumbnail.jpg"
              width={100}
              height={100}
              alt="Shoes Picture"
              layout="fixed"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
