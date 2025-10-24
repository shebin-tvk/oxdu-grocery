import LogoAndName from "./LogoAndName.js";
import MainSearch from "./MainSearch.js";
import HeaderWishListAndCart from "./HeaderWishListAndCart.js";
import HeaderUser from "./HeaderUser.js";
import { FireIcon, HomeIcon, PercentageIcon, PromoIcon } from "./icons/index.js";
import Button from "../../ui/Button.js";
import { Menu } from "lucide-react";  
import { useState } from "react";

const PageHeader = () => {
   const menuItems = [
     {
       title: "Home",
       icon: <HomeIcon />,
     },
     {
       title: "Promo",
       icon: <PromoIcon />,
     },
     {
       title: "Fire",
       icon: <FireIcon />,
     },
     {
       title: "Percentage",
       icon: <PercentageIcon />,
     },
   ];
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className="  w-full  mx-auto">
        <div className="w-full py-4 flex items-center gap-2 justify-around border-b-[1px] border-theme-gray">
          <div>
            <LogoAndName />
          </div>
          <div className="hidden md:block">
            <MainSearch />
          </div>
          <div className="hidden md:block">
            <HeaderWishListAndCart />
          </div>
          <div className="flex items-center gap-4">
            <HeaderUser />
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
        <div className=" md:hidden  flex justify-center items-center py-2  mx-5">
          <MainSearch />
        </div>
        <div className="header-row-2 py-[10px] hidden md:block">
          <div className=" mx-auto flex items-center justify-around">
            {/* Button */}
            <div>
              <Button
                variant="primary"
                startIcon={<img src="layout-grid.svg" />}
              >
                Browser All Categories
              </Button>
            </div>
            {/** Menu */}
            <div>
              <ul className="flex gap-[69px] text-[16px] font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-primary p-[10px] flex gap-[5px]"
                    >
                      {item.icon} {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/** Phone number */}
            <div className="flex items-center gap-[5px]">
              <img src="Call.svg" alt="" className="w-5 h-5 " />
              <span className="text-primary text-lg ">123456789</span>
              <span className="text-[14px] font-medium">
                24/7 support center
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-[21px] border-b-[1px] border-theme-gray">
          <h2 className="text-xl font-semibold text-primary">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl font-bold">
            &times;
          </button>
        </div>
      </div>
    </>
  );
}

export default PageHeader