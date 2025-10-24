import Button from "../../ui/Button";

const MainSearch = () => {
  return (
    <div className="flex bg-[#F3F3F3] items-center text-xs w-[500px]">
      <div className="flex px-3 w-[calc(100%-55px)]">
        <span className="pe-3 w-[136px] hidden sm:block">
          <select className="w-full">
            <option value="1">All Categories</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">3</option>
            <option value="3">3</option>
            <option value="3">3</option>
          </select>
        </span>
        <input
          type="text"
          placeholder="Search for items..."
          className="md:border-l border-solid border-theme-gray ps-2 w-full md:w-[calc(100%-136px)]"
        />
      </div>

      <Button
        variant="primary"
        className="!p-0 w-[55px] h-[42px] flex items-center justify-center  rounded-s-none"
      >
        <img src="search.svg" className="w-6" />
      </Button>
    </div>
  );
}

export default MainSearch