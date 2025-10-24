export default function HeaderUser() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <img
          src="user-placeholder.svg"
          className="w-10 h-10 rounded-full"
          alt="user"
        />
        <span className="hidden xl:block">Habil M</span>
        <img src="chevron-down.svg" />
      </div>
    </>
  );
}
