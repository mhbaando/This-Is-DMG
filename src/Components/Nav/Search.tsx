import Images from "../../Static";
function Search(): JSX.Element {
  return (
    <div className="mk__search">
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src={Images.SearchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
