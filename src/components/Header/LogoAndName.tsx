

const LogoAndName = () => {
  return (
    <div className="flex items-center gap-2 ">
      <img
        src="../../public/logo.svg"
        alt="logo"
        className="h-[39px] w-[39px]"
      />
      <div className="flex flex-col">
        <span className="text-primary font-bold text-[21px] leading-none">
          OxDu Grosy
        </span>
        <span className="text-theme-gray text-sm font-medium">GROCERY</span>
      </div>
    </div>
  );
}

export default LogoAndName