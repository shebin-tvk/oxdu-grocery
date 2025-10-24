
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const Footer2 = () => {
  return (
    <div className="flex justify-center items-center pb-5 w-full px-28">
      <div className="flex justify-between items-start gap-5 border-y-1 py-20 w-full ">
        <div className="flex flex-col justify-evenly items-start gap-5">
          <div className="flex items-center gap-1">
            <img src="logo.svg" alt="" className="h-10 w-8" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-[#3BB77E] font-bold text-2xl">OxDu Grosy</h1>
              <p className="text-[#adadad] text-xs">GROCERY</p>
            </div>
          </div>

          <p className="flex items-center text-[#253d4e]">
            <CiLocationOn className="text-[#3bb77e] text-xl" />
            <span className="font-semibold">address:</span> 1762 School House
            Road
          </p>

          <p className="flex items-center text-[#253d4e]">
            <IoCallOutline className="text-[#3bb77e] text-xl" />
            <span className="font-semibold">Call Us:</span> 234 567 890
          </p>

          <p className="flex items-center text-[#253d4e]">
            <MdOutlineEmail className="text-[#3bb77e] text-xl" />
            <span className="font-semibold">Email:</span> grocery@gmail.com
          </p>

          <p className="flex items-center text-[#253d4e]">
            <IoMdTime className="text-[#3bb77e] text-xl" />
            <span className="font-semibold">Work hours:</span> 8:00-20:00,Sunday
            - Thursday
          </p>
        </div>

        <div className="flex flex-col justify-evenly items-start gap-10">
          <div>
            <h1 className="text-xl font-semibold">Account</h1>
          </div>

          <div className="flex flex-col gap-4 text-sm text-[#253d4e]">
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
            <a href="#">Track Order</a>
            <a href="#">Shipping Details</a>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-start gap-10">
          <div>
            <h1 className="text-xl font-semibold">Useful links</h1>
          </div>

          <div className="flex flex-col gap-4 text-sm text-[#253d4e]">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Hot deals</a>
            <a href="#">Promotions</a>
            <a href="#">New product</a>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-start gap-10">
          <div>
            <h1 className="text-xl font-semibold">Help Center</h1>
          </div>

          <div className="flex flex-col gap-4 text-sm text-[#253d4e]">
            <a href="#">Payments</a>
            <a href="#">Refund</a>
            <a href="#">Checkout</a>
            <a href="#">Shipping</a>
            <a href="#">Q&A</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2