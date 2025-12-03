import SearchIcon from "@/_icons/SearchIcon";

export default function Search() {
  return (
    <div className="bg-second-2 rounded-r-sm py-1.5 pl-5 pr-3">
      <div className="flex items-center gap-3">
        <input
          className="w-[190px] outline-none text-sm"
          placeholder="What are you looking for?"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
