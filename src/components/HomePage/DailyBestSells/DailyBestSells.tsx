import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DailyItems } from "../../../constants/index";
import { FaStar } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import DailyOffer from "./DailyOffer";

const DailyBestSells = () => {
  return (
    <div className="container mx-auto my-25">
      <div className="ml-5 md:ml-28 mb-9">
        <h2 className="font-semibold text-[32px] text-theme-black">
          Daily Best Sells
        </h2>
      </div>
      <div className="flex justify-center items-center gap-9 md:mx-28">
        {/* <div className="bg-[#f2f3f4] p-2 rounded-full md:block hidden">
          <img src="li_arrow-right.svg" />
        </div> */}
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
          {DailyItems &&
            DailyItems.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div className="flex flex-col">
                  <div className="h-95 max-w-56   flex flex-col justify-start items-center border-1 border-[#adadad] pb-3">
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
                      </div>

                      <div>
                        <div className="w-50 h-1 rounded-full bg-[#adadad]">
                          <div className="w-25 h-full bg-[#3BB77E]"></div>
                        </div>
                        <div>
                          <p className="text-xs text-[#adadad]">sold 50/100</p>
                        </div>
                      </div>

                      <div>
                        <button className="flex items-center bg-[#3bb77e] py-1 px-10 text-[#ffffff] text-lg">
                          <CiShoppingCart />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
            <SwiperSlide><DailyOffer/></SwiperSlide>
        </Swiper>
        {/* <div className="bg-[#f2f3f4]  p-2 rounded-full md:block hidden">
          <img src="li_arrow-left.svg" />
        </div> */}
      </div>
    </div>
  );
};

export default DailyBestSells;
