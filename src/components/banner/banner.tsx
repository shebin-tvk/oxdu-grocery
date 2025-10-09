// import Bg from '../../../public/assets/Rectangle 1.svg'

const Banner = () => {
  return (
    <div className="container mx-auto h-[477px] w-full bg-[#c5ead9] relative">
      <div className="bg-[url('Rectangle1.svg')] bg-no-repeat bg-cover bg-center h-full p-22">
        <img
          src="Hreo-img.svg"
          alt=""
          className="absolute top-0 right-0 hidden md:block"
        />
        <span className="font-bold text-[55px] text-theme-black leading-18">
          Don’t miss our daily <br /> amazing deals.
        </span>
      </div>
    </div>
  );
}

export default Banner