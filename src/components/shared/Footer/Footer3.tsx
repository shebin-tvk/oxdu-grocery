import { FaRegCopyright } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";

const Footer3 = () => {
  return (
    <div className='flex justify-center items-center pb-5'>

        <div className='flex justify-between items-center gap-87'>

            <p className='flex items-center text-sm'><FaRegCopyright className='text-xs' /> 2025,All right reserved</p>

            <img src="Payment.svg" alt=""  className='w-60'/>

            <div className='flex items-center gap-2 text-[#ffffff] text-2xl'>
                <div className='bg-[#3BB77E] rounded-full p-1'><BiLogoFacebook /></div>
                <div className='bg-[#3BB77E] rounded-full p-1'><TiSocialLinkedin /></div>
                <div className='bg-[#3BB77E] rounded-full p-1'><IoLogoInstagram /></div>
                <div className='bg-[#3BB77E] rounded-full p-1'><TiSocialTwitter /></div>
            </div>

        </div>

    </div>
  )
}

export default Footer3