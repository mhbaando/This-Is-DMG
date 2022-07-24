import Images from "../../Static";
function Search(): JSX.Element {
  return (
    <div>
      <form className="kt__search">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src={Images.SearchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
