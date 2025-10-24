import IconWithCount from "./IconWithCount";

export default function HeaderWishListAndCart() {
  return (
    <div className="flex gap-[53px] justify-between text-xs font-medium">
      <div className="flex gap-[5px]  items-center ">
        <IconWithCount icon="heart.svg" count={4} />
        <span className="text-xs hidden lg:block">Wishlist</span>
      </div>
      <div className="flex gap-[5px]  items-center">
        <div>
          <IconWithCount icon="shopping-cart.svg" count={9} />
        </div>
        <div className="hidden lg:block">
          <div>Cart</div>
          <div className="text-primary ">$21</div>
        </div>
        <img src="chevron-down.svg" />
      </div>
    </div>
  );
}
