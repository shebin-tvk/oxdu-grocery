import { Home, ShoppingCart,  Heart } from "lucide-react";
import { TbCategory } from "react-icons/tb";

const FooterNav = () => {
  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 bg-white  shadow-md border-t border-theme-gray md:hidden">
      <div className="flex justify-around items-center py-2">
        <button className="flex flex-col items-center text-theme-gray hover:text-primary">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-theme-gray hover:text-primary">
          <TbCategory size={22} />
          <span className="text-xs">Categories</span>
        </button>
        <button className="flex flex-col items-center text-theme-gray hover:text-primary">
          <ShoppingCart size={22} />
          <span className="text-xs">Cart</span>
        </button>
        <button className="flex flex-col items-center text-theme-gray hover:text-primary">
          <Heart size={22} />
          <span className="text-xs">Wishlist</span>
        </button>
        
      </div>
    </div>
  );
};

export default FooterNav;
