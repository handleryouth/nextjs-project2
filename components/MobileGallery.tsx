import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MobileGallery: React.FC = () => {
  return (
    <div>
      <div className="flex lg:hidden flex-col items-center  justify-center ">
        <Swiper modules={[Navigation]} navigation className="w-screen h-[450]">
          <SwiperSlide>
            <div className="w-100 flex justify-center">
              <Image
                src="/images/image-product-1.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100 flex justify-center">
              <Image
                src="/images/image-product-2.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100 flex justify-center">
              <Image
                src="/images/image-product-3.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-100 flex justify-center">
              <Image
                src="/images/image-product-4.jpg"
                width={450}
                height={450}
                alt="Shoes Picture"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileGallery;
