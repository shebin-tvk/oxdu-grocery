import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  FeaturedItems } from "../../../constants/index";
import { FaStar } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";


export default function FeatureSlider() {
 

  return (
    <div className="container mx-auto my-25">
      <div className="ml-5 md:ml-28 mb-9">
        <h2 className="font-semibold text-[32px] text-theme-black">
          Featured Products
        </h2>
      </div>
      <div className="flex justify-around items-center gap-9 mx-9">
        <div className="bg-[#f2f3f4] p-2 rounded-full md:block hidden">
          <img src="li_arrow-right.svg" />
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 22,
            },
          }}
        >
          {FeaturedItems &&
            FeaturedItems.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div className="flex flex-col">
                  <div className="h-75 max-w-57 min-w-43   flex flex-col justify-start items-center border-1 border-[#adadad] pb-3">
                    <div>
                      <img
                        src={slider.image}
                        alt="Featured Item"
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-col justify-around items-center gap-2 w-full p-3">
                      <div className="items-start justify-start flex flex-col w-full">
                        <p className="text-xs text-[#adadad]">
                          {slider.category}
                        </p>
                        <h1 className="font-semibold text-lg">{slider.name}</h1>
                      </div>

                      <div className="flex flex-col w-full">
                        <p className="flex items-center">
                          <FaStar className="text-[#fdc040]" />
                          <FaStar className="text-[#fdc040]" />
                          <FaStar className="text-[#fdc040]" />
                          <FaStar className="text-[#fdc040]" />
                          <FaStar className="text-[#ababab]" />
                          <span className="text-xs">(4)</span>
                        </p>
                        <p className="text-xs text-[#ababab]">
                          By <span className="text-[#3BB77E]">Mr.food</span>
                        </p>
                      </div>

                      <div className="flex justify-between items-center w-full gap-3 ">
                        <div className="flex items-center gap-2">
                          <p className="text-[#3BB77E] font-semibold text-lg">
                            {slider.Dprice}
                          </p>
                          <p className="text-[#ababab] font-semibold text-sm line-through">
                            {slider.Oprice}
                          </p>
                        </div>
                        <button className="flex items-center bg-[#def9ec] py-2 px-[22px] text-[#3BB77E] text-[14px] rounded-sm">
                          <CiShoppingCart size={20}/>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
