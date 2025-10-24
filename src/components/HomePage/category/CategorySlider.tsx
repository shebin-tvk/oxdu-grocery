import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Image from "./Image";

import { getBgColor, ExploreItems } from "../../../constants/index";

export default function CategorySlider() {
 

  return (
    <div className="container mx-auto my-25">
      <div className="ml-5 md:ml-28 mb-9">
        <h2 className="font-semibold text-[32px] text-theme-black">
          Explore Categories
        </h2>
      </div>
      <div className="flex justify-around items-center gap-9 mx-9">
        <div className="bg-[#f2f3f4] p-2 rounded-full md:block hidden">
          <img src="li_arrow-right.svg" />
        </div>
        <Swiper
          spaceBetween={21}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 22,
            },
          }}
        >
          {ExploreItems &&
            ExploreItems.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div
                  className="h-49 max-w-38 flex flex-col justify-evenly items-center"
                  style={{ backgroundColor: getBgColor() }}
                >
                  <img src={slider.image} alt={slider.name} />
                  <div className="items-center flex flex-col">
                    <h1 className="font-semibold text-lg">{slider.name}</h1>
                    <p className="text-xs text-[#adadad]">
                      {slider.count} items
                    </p>
                  </div>
                </div>
                {/* <div
                  style={{ backgroundColor: getBgColor() }}
                  className=" text-center p-4 rounded-[3px] "
                >
                  <Image
                    src={slider.image}
                    alt={slider.name}
                    className={"w-[100px] h-[100px] object-cover mx-auto mb-3"}
                  />
                  <div className="text-lg font-semibold text-theme-black ">
                    {slider.name}
                  </div>
                  <div className="text-sm text-theme-gray">{slider.count} items</div>
                </div> */}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="bg-[#f2f3f4]  p-2 rounded-full md:block hidden">
          <img src="li_arrow-left.svg" />
        </div>
      </div>
    </div>
  );
}
