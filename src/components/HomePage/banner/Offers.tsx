
import { IoIosArrowRoundForward } from "react-icons/io";

const Offers = () => {
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center gap-5 lg:gap-15 mb-20 px-2 mx-auto ">
      <div className="bg-[#fff5e1] w-full sm:w-[605px]  h-[300px] rounded-sm">
        <div className="relative bg-cover bg-center h-full w-full bg-[url('Rectangle1.svg')] bg-no-repeat ">
          <div>
            <img
              src="Offer1-img.svg"
              alt="corner image"
              className="absolute bottom-0 right-1 h-63 z-0"
            />
          </div>

          <div className="flex flex-col justify-evenly items-start h-full ml-4 md:ml-10  absolute z-1">
            <div className="bg-[#ffd480] text-[#ffffff] p-1 text-xs">
              <p>Free delivery</p>
            </div>
            <div className="font-semibold text-3xl">
              <h1 className="">Free delivery over $50</h1>
            </div>
            <div className="text-[#838383]">
              <p className="leading-none ">
                Shop $50 product and get free <br /> delivery anywhere
              </p>
            </div>
            <button className="flex items-center justify-center text-[#ffffff] bg-[#3bb77e] p-2">
              Shop Now <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#d2efe1]  w-full sm:w-[605px]  h-[300px] rounded-sm">
        <div className="relative bg-[url('Rectangle1.svg')] bg-no-repeat bg-cover bg-center w-full h-full">
          <div>
            <img
              src="Offer2-img.svg"
              alt="corner image"
              className="absolute bottom-0 right-0 h-58  z-0"
            />
          </div>

          <div className="flex flex-col justify-evenly items-start h-full ml-4 md:ml-10 absolute z-1">
            <div className="bg-[#3bb77e] text-[#ffffff] p-1 text-xs">
              <p>60% Off</p>
            </div>
            <div className="font-semibold text-3xl">
              <h1>Organic Food</h1>
            </div>
            <div className="text-[#838383]">
              <p className="leading-none">
                Save up to 60% on your <br /> first order
              </p>
            </div>
            <button className="flex items-center justify-center text-[#ffffff] bg-[#3bb77e] p-2">
              Order Now <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers