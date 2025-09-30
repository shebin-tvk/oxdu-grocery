import LogoAndName from "./LogoAndName.js";
import MainSearch from "./MainSearch.js";
import HeaderWishListAndCart from "./HeaderWishListAndCart.js";
import HeaderUser from "./HeaderUser.js";

const PageHeader = () => {
  return (
    <div className="container  w-full  ">
      <div className="w-full py-4 flex items-center gap-2 justify-around">
        <div>
          <LogoAndName />
        </div>
        <div className="hidden md:block">
          <MainSearch />
        </div>
        <div>
          <HeaderWishListAndCart />
        </div>
        <div>
          <HeaderUser />
        </div>
      </div>
      <div className=" md:hidden w-full flex justify-center py-2 border-t">
        <MainSearch />
      </div>
    </div>
  );
}

export default PageHeader