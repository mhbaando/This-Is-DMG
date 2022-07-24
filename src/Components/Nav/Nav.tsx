import Brand from "./Brands";
import Search from "./Search";
import LeftButtons from "./LeftButtons";
function Nav(): JSX.Element {
  return (
    <section>
      <div className="mk__nav">
        <Brand />
        <Search />
        <LeftButtons />
      </div>
    </section>
  );
}

export default Nav;
