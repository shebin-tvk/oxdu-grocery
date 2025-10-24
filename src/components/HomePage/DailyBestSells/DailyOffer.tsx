import { RiKey2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";


const DailyOffer = () => {
  return (
    <div className="flex flex-col bg-[#fff7e6] h-95 w-56 border-1 border-[#adadad]">
      <div className="   flex flex-col justify-center items-center  pb-3 bg-[url('Rectangle1.svg')] bg-no-repeat bg-cover bg-center h-full w-full">
        <div className="flex flex-col justify-evenly items-center gap-7">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-semibold">10% OFF</h1>
            <p className="text-sm">For new member sign up at </p>
            <p className="text-sm"> the first time</p>
          </div>

          <div className="flex items-start justify-center flex-col">
            <p className="text-sm ">Email address</p>
            <div className="bg-[#ffffff] flex items-center py-2 px-3 text-[#ababab]">
              <MdOutlineEmail />
              <input
                type="email"
                name=""
                id=""
                placeholder="shebin@gmail.com"
                className="text-sm"
              />
            </div>
            <p className="text-sm ">Email address</p>
            <div className="bg-[#ffffff] flex items-center py-2 px-3 text-[#ababab]">
              <RiKey2Line />
              <input
                type="password"
                name=""
                id=""
                placeholder="maximum 8 characters"
                className="text-sm"
              />
            </div>
          </div>

          <div>
            <button className="flex items-center bg-[#3bb77e] py-1 px-10 text-[#ffffff] text-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOffer;
